package br.com.chapeleiro.chapeleiro.aplicacao.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<UserModel, Integer> {
    Optional<UserModel> findByEmailUsuario(String emailUsuario);
}
