package br.com.chapeleiro.chapeleiro.aplicacao.quiz;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface QuizRepository extends JpaRepository<QuizModel, Integer> {
    List<QuizModel> findByCapitulo(CapituloModel capitulo);
}
