package br.com.chapeleiro.chapeleiro.aplicacao.pergunta;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import br.com.chapeleiro.chapeleiro.aplicacao.quiz.QuizModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PerguntaRepository extends JpaRepository<PerguntaModel, Integer> {
    List<PerguntaModel> findByQuiz(QuizModel quiz);
    List<PerguntaModel> findByQuizCapitulo(CapituloModel capitulo);
}
