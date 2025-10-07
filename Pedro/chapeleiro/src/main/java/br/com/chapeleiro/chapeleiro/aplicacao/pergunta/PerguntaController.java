package br.com.chapeleiro.chapeleiro.aplicacao.pergunta;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloRepository;
import br.com.chapeleiro.chapeleiro.aplicacao.quiz.QuizModel;
import br.com.chapeleiro.chapeleiro.aplicacao.quiz.QuizRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pergunta")
public class PerguntaController {

    @Autowired
    PerguntaRepository repository;

    @Autowired
    QuizRepository quizRepository;

    @Autowired
    CapituloRepository capituloRepository;

    @GetMapping
    public ResponseEntity getAll() {
        List<PerguntaModel> listPerguntas = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listPerguntas);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable(value = "id") Integer id) {
        Optional<PerguntaModel> recurso = repository.findById(id);
        if (recurso.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pergunta not found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(recurso.get());
    }

    @GetMapping("/quiz/{idQuiz}")
    public ResponseEntity getByQuiz(@PathVariable(value = "idQuiz") Integer idQuiz) {
        Optional<QuizModel> wp = quizRepository.findById(idQuiz);
        if (wp.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Quiz not found");
        }
        List<PerguntaModel> recursos = repository.findByQuiz(wp.get());
        return ResponseEntity.status(HttpStatus.OK).body(recursos);
    }

    @GetMapping("/capitulo/{idCapitulo}")
    public ResponseEntity getByCapitulo(@PathVariable(value = "idCapitulo") Integer idCapitulo) {
        Optional<CapituloModel> capitulo = capituloRepository.findById(idCapitulo);
        if (capitulo.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("EBF not found");
        }
        List<PerguntaModel> recursos = repository.findByQuizCapitulo(capitulo.get());
        return ResponseEntity.status(HttpStatus.OK).body(recursos);
    }

}
