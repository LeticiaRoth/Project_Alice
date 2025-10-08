package br.com.chapeleiro.chapeleiro.aplicacao.usuarioCapitulo;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloRepository;
import br.com.chapeleiro.chapeleiro.aplicacao.security.TokenService;
import br.com.chapeleiro.chapeleiro.aplicacao.user.UserDto;
import br.com.chapeleiro.chapeleiro.aplicacao.user.UserModel;
import br.com.chapeleiro.chapeleiro.aplicacao.user.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/usercapitulo")
public class UserCapituloController {

    @Autowired
    UserCapituloRepository repository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CapituloRepository capituloRepository;

    @Autowired
    TokenService tokenService;

    @GetMapping
    public ResponseEntity getAll(){
        List<UserCapituloModel> listUserCapitulos = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listUserCapitulos);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable(value = "id") Integer id){
        Optional userCapitulo = repository.findById(id);
        if(userCapitulo.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("UserCapitulo not find");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(userCapitulo.get());
    }

    @GetMapping("/capitulo/{idCapitulo}")
    public ResponseEntity getByCapitulo(@PathVariable(value = "idCapitulo") Integer idCapitulo) {
        Optional<CapituloModel> wp = capituloRepository.findById(idCapitulo);
        if (wp.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Capitulo not found");
        }
        List<UserCapituloModel> userCapitulos = repository.findByCapitulo(wp.get());
        return ResponseEntity.status(HttpStatus.OK).body(userCapitulos);
    }

    @GetMapping("/user/{id_user}")
    public ResponseEntity getByUser(@PathVariable(value = "id_user") Integer idUser) {
        Optional<UserModel> user = userRepository.findById(idUser);
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
        }
        List<UserCapituloModel> userCapitulos = repository.findByUser(user.get());
        return ResponseEntity.status(HttpStatus.OK).body(userCapitulos);
    }

    @GetMapping("/me")
    public ResponseEntity getMeuProgresso(@RequestHeader(name = "Authorization") String authorizationHeader) {
        String token = tokenService.extractToken(authorizationHeader);
        Integer userId = tokenService.getUserIdFromToken(token);

        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token inválido ou ausente.");
        }

        Optional<UserModel> user = userRepository.findById(userId);
        if (user.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário não encontrado.");
        }

        List<UserCapituloModel> userCapitulos = repository.findByUser(user.get());
        return ResponseEntity.status(HttpStatus.OK).body(userCapitulos);
    }

    @PatchMapping("/concluir")
    public ResponseEntity concluirCapitulo(
            @RequestHeader(name = "Authorization") String authorizationHeader,
            @RequestBody UserCapituloDto data) {

        String token = tokenService.extractToken(authorizationHeader);
        Integer userId = tokenService.getUserIdFromToken(token);

        if (userId == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Token inválido ou ausente.");
        }

        Optional<UserModel> userOpt = userRepository.findById(userId);
        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Usuário do Token não encontrado.");
        }
        UserModel user = userOpt.get();

        if (data.idCapitulo() == null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("ID do Capítulo é obrigatório.");
        }

        Optional<CapituloModel> capituloOpt = capituloRepository.findById(data.idCapitulo());
        if (capituloOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Capítulo não encontrado.");
        }
        CapituloModel capitulo = capituloOpt.get();

        Optional<UserCapituloModel> userCapituloOpt = repository.findByUserAndCapitulo(user, capitulo);
        UserCapituloModel userCapitulo = userCapituloOpt.orElseGet(UserCapituloModel::new);

        userCapitulo.setUser(user);
        userCapitulo.setCapitulo(capitulo);
        userCapitulo.setConcluidoUsuarioCapitulo(true);
        userCapitulo.setProgressoUsuarioCapitulo(100);

        repository.save(userCapitulo);

        return ResponseEntity.ok("Capítulo marcado como concluído.");
    }

    @PostMapping
    public ResponseEntity save(@RequestBody UserCapituloDto userCapituloDto){
        var userCapitulo = new UserCapituloModel();
        BeanUtils.copyProperties(userCapituloDto, userCapitulo);
        return ResponseEntity.status(HttpStatus.CREATED).body(repository.save(userCapitulo));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable(value = "id") Integer id){
        Optional<UserCapituloModel> userCapitulo = repository.findById(id);
        if(userCapitulo.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("UserCapitulo not find");
        }
        repository.delete(userCapitulo.get());
        return ResponseEntity.status(HttpStatus.OK).body("UserCapitulo deletado");
    }

    @PatchMapping("/{id}")
    public ResponseEntity patch(@PathVariable(value = "id") Integer id, @RequestBody UserCapituloDto userCapituloDto){
        Optional<UserCapituloModel> userCapitulo = repository.findById(id);
        if(userCapitulo.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("UserCapitulo not found");
        }

        var userCapituloModel = userCapitulo.get();

        if(userCapituloDto.idCapitulo() != null){
            Optional<CapituloModel> capitulo = capituloRepository.findById(userCapituloDto.idCapitulo());
            if(capitulo.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Capitulo not found");
            }
            userCapituloModel.setCapitulo(capitulo.get());
        }

        if(userCapituloDto.idUser() != null){
            Optional<UserModel> user = userRepository.findById(userCapituloDto.idUser());
            if(user.isEmpty()){
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found");
            }
            userCapituloModel.setUser(user.get());
        }

        if(userCapituloDto.concluido() != null){
            userCapituloModel.setConcluidoUsuarioCapitulo(userCapituloDto.concluido());
        }

        if(userCapituloDto.progresso() != null){
            userCapituloModel.setProgressoUsuarioCapitulo(userCapituloDto.progresso());
        }

        return ResponseEntity.status(HttpStatus.OK).body(repository.save(userCapituloModel));
    }
}