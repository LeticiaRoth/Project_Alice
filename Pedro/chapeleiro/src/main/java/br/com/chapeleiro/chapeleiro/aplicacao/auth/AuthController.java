package br.com.chapeleiro.chapeleiro.aplicacao.auth;

import br.com.chapeleiro.chapeleiro.aplicacao.security.TokenService;
import br.com.chapeleiro.chapeleiro.aplicacao.user.UserRepository;
import br.com.chapeleiro.chapeleiro.aplicacao.user.UserModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    // DTOs para comunicação
    public record LoginDTO(String emailUsuario, String senhaUsuario) {}
    public record TokenResponse(String token) {}

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody LoginDTO data) {
        Optional<UserModel> userOpt = userRepository.findByEmailUsuario(data.emailUsuario());

        if (userOpt.isEmpty()) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha incorretos.");
        }

        UserModel user = userOpt.get();

        // Checagem de senha simples (sem BCrypt)
        if (user.getSenhaUsuario().equals(data.senhaUsuario())) {
            // Gera o token com o ID do usuário
            String token = tokenService.generateToken(user.getIdUsuario());
            return ResponseEntity.ok(new TokenResponse(token));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuário ou senha incorretos.");
    }
}