package br.com.chapeleiro.chapeleiro.aplicacao.usuarioCapitulo;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import br.com.chapeleiro.chapeleiro.aplicacao.user.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

public interface UserCapituloRepository extends JpaRepository<UserCapituloModel, Integer> {
    List<UserCapituloModel> findByUser (UserModel user);
    List<UserCapituloModel> findByCapitulo (CapituloModel capitulo);
    Optional<UserCapituloModel> findByUserAndCapitulo (UserModel user, CapituloModel capitulo);
}
