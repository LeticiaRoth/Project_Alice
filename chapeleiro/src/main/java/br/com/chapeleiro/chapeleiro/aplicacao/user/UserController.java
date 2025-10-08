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

    @Autowired
    TokenService tokenService;

    @GetMapping("/me")
    public ResponseEntity getMeuPerfil(@RequestHeader(name = "Authorization") String authorizationHeader){

        String token = tokenService.extractToken(authorizationHeader);
        if (token == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token ausente.");
        }

        Integer userId = tokenService.getUserIdFromToken(token);
        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token inválido ou expirado.");
        }

        Optional<UserModel> usuario = repository.findById(userId);

        if(usuario.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuario not find");
        }

        return ResponseEntity.status(HttpStatus.OK).body(usuario.get());
    }

    @PostMapping
    public ResponseEntity register(@RequestBody UserDto data) {
        if (repository.findByEmailUsuario(data.emailUsuario()).isPresent()) {
            return ResponseEntity.status(HttpStatus.CONFLICT).body("Email já cadastrado.");
        }

        UserModel newUser = new UserModel();

        newUser.setSenhaUsuario(data.senhaUsuario());
        newUser.setNomeUsuario(data.nomeUsuario());
        newUser.setEmailUsuario(data.emailUsuario());

        UserModel savedUser = repository.save(newUser);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedUser);
    }


    @DeleteMapping("/me")
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
