package br.com.chapeleiro.chapeleiro.aplicacao.user;

import br.com.chapeleiro.chapeleiro.aplicacao.security.TokenService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository repository;

    @GetMapping
    public ResponseEntity getAll(){
        List<UserModel> listUsuarios = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listUsuarios);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable(value = "id") Integer id){
        Optional usuario = repository.findById(id);
        if(usuario.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not find");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(usuario.get());
    }

    // Adicionada a injeção do TokenService
    @Autowired
    TokenService tokenService;

    // Endpoint para o React pegar o *próprio* usuário logado
    @GetMapping("/me")
    public ResponseEntity getMeuPerfil(@RequestHeader(name = "Authorization") String authorizationHeader){

        // 1. Extrai e valida o token
        String token = tokenService.extractToken(authorizationHeader);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token ausente.");
        }

        // 2. Pega o ID do usuário que está no token
        Integer userId = tokenService.getUserIdFromToken(token);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token inválido ou expirado.");
        }

        // 3. Usa o ID do token para buscar os dados do usuário no banco
        Optional<UserModel> usuario = repository.findById(userId);

        if(usuario.isEmpty()){
            // Isso não deveria acontecer se o ID for válido, mas é bom checar
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not find");
        }

        // Retorna APENAS o usuário identificado pelo token
        return ResponseEntity.status(HttpStatus.OK).body(usuario.get());
    }

    @PostMapping
    public ResponseEntity register(@RequestBody UserDto data) {
        // 1. Checa se o usuário já existe
        if (repository.findByEmailUsuario(data.emailUsuario()).isPresent()) {
            // Retorna 409 Conflict se o email já estiver cadastrado
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email já cadastrado.");
        }

        // 2. Cria e preenche o modelo (UserModel)
        UserModel newUser = new UserModel();

        // ATENÇÃO: Se for projeto de estudo, use a senha em texto puro:
        newUser.setSenhaUsuario(data.senhaUsuario());

        // Se você estivesse usando o Spring Security, usaria:
        // newUser.setSenhaUsuario(passwordEncoder.encode(data.senhaUsuario()));

        newUser.setNomeUsuario(data.nomeUsuario());
        newUser.setEmailUsuario(data.emailUsuario());

        // 3. Salva no banco e retorna
        UserModel savedUser = repository.save(newUser);

        // Retorna 201 Created
        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity delete(@PathVariable(value = "id") Integer id){
//        Optional<UserModel> usuario = repository.findById(id);
//        if(usuario.isEmpty()){
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not find");
//        }
//        repository.delete(usuario.get());
//        return ResponseEntity.status(HttpStatus.OK).body("Usuario deletado");
//    }


    @DeleteMapping("/me") // Altere a rota para /me para ser mais explícito
    public ResponseEntity delete(@RequestHeader(name = "Authorization") String authorizationHeader){

        String token = tokenService.extractToken(authorizationHeader);
        Integer userId = tokenService.getUserIdFromToken(token);

        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Não autorizado ou token inválido.");
        }

        Optional<UserModel> usuario = repository.findById(userId);
        if(usuario.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not find");
        }

        repository.delete(usuario.get());
        return ResponseEntity.status(HttpStatus.OK).body("Usuario deletado");
    }

    @PatchMapping("/{id}")
    public ResponseEntity patch(@PathVariable(value = "id") Integer id, @RequestBody UserDto userDto){
        Optional<UserModel> usuario = repository.findById(id);
        if(usuario.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not found");
        }

        var userModel = usuario.get();

        if(userDto.nomeUsuario() != null){
            userModel.setNomeUsuario(userDto.nomeUsuario());
        }

        if(userDto.emailUsuario() != null){
            userModel.setEmailUsuario(userDto.emailUsuario());
        }

        if(userDto.senhaUsuario() != null){
            userModel.setSenhaUsuario(userDto.senhaUsuario());
        }

        return ResponseEntity.status(HttpStatus.OK).body(repository.save(userModel));
    }
}
