package br.com.chapeleiro.chapeleiro.aplicacao.quiz;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import jakarta.persistence.*;

@Entity(name = "quiz")
@Table(name = "quiz")
public class QuizModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer idQuiz;
    @ManyToOne
    @JoinColumn(name = "id_capitulo", referencedColumnName = "id")
    private CapituloModel capitulo;

    public QuizModel() {
    }

    public QuizModel(Integer idQuiz, CapituloModel capitulo) {
        this.idQuiz = idQuiz;
        this.capitulo = capitulo;
    }

    public Integer getIdQuiz() {
        return idQuiz;
    }

    public void setIdQuiz(Integer idQuiz) {
        this.idQuiz = idQuiz;
    }

    public CapituloModel getCapitulo() {
        return capitulo;
    }

    public void setCapitulo(CapituloModel capitulo) {
        this.capitulo = capitulo;
    }
}
