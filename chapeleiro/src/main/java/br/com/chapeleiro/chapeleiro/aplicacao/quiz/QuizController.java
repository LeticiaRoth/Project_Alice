package br.com.chapeleiro.chapeleiro.aplicacao.quiz;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quiz")
public class QuizController {

    @Autowired
    QuizRepository repository;

    @Autowired
    CapituloRepository capituloRepository;

    @GetMapping
    public ResponseEntity getAll() {
        List<QuizModel> listQuizs = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listQuizs);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable(value = "id") Integer id) {
        Optional<QuizModel> quiz = repository.findById(id);
        if (quiz.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Quiz not found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(quiz.get());
    }

    @GetMapping("/capitulo/{idCapitulo}")
    public ResponseEntity getByCapitulo(@PathVariable(value = "idCapitulo") Integer idCapitulo) {
        Optional<CapituloModel> capitulo = capituloRepository.findById(idCapitulo);
        if (capitulo.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Capitulo not found");
        }
        List<QuizModel> quizs = repository.findByCapitulo(capitulo.get());
        return ResponseEntity.status(HttpStatus.OK).body(quizs);
    }
    
}