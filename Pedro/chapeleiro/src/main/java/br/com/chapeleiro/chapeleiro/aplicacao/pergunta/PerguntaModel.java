package br.com.chapeleiro.chapeleiro.aplicacao.pergunta;

import br.com.chapeleiro.chapeleiro.aplicacao.quiz.QuizModel;
import jakarta.persistence.*;

@Entity(name = "pergunta")
@Table(name = "pergunta")
public class PerguntaModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer idPergunta;
    @Column(name = "nome")
    private String nomePergunta;
    @Column(name = "texto")
    private String textoPergunta;

    @ManyToOne
    @JoinColumn(name = "id_quiz", referencedColumnName = "id")
    private QuizModel quiz;

    @Column(name = "alternativa1")
    private String alternativa1;
    @Column(name = "alternativa2")
    private String alternativa2;
    @Column(name = "alternativa3")
    private String alternativa3;
    @Column(name = "alternativa4")
    private String alternativa4;
    @Column(name = "reposta_correta")
    private String respostaCorreta;

    public PerguntaModel() {
    }

    public PerguntaModel(Integer idPergunta, String nomePergunta, String textoPergunta, QuizModel quiz, String alternativa1, String alternativa2, String alternativa3, String alternativa4, String respostaCorreta) {
        this.idPergunta = idPergunta;
        this.nomePergunta = nomePergunta;
        this.textoPergunta = textoPergunta;
        this.quiz = quiz;
        this.alternativa1 = alternativa1;
        this.alternativa2 = alternativa2;
        this.alternativa3 = alternativa3;
        this.alternativa4 = alternativa4;
        this.respostaCorreta = respostaCorreta;
    }

    public Integer getIdPergunta() {
        return idPergunta;
    }

    public void setIdPergunta(Integer idPergunta) {
        this.idPergunta = idPergunta;
    }

    public String getNomePergunta() {
        return nomePergunta;
    }

    public void setNomePergunta(String nomePergunta) {
        this.nomePergunta = nomePergunta;
    }

    public String getTextoPergunta() {
        return textoPergunta;
    }

    public void setTextoPergunta(String textoPergunta) {
        this.textoPergunta = textoPergunta;
    }

    public QuizModel getQuiz() {
        return quiz;
    }

    public void setQuiz(QuizModel quiz) {
        this.quiz = quiz;
    }

    public String getAlternativa1() {
        return alternativa1;
    }

    public void setAlternativa1(String alternativa1) {
        this.alternativa1 = alternativa1;
    }

    public String getAlternativa2() {
        return alternativa2;
    }

    public void setAlternativa2(String alternativa2) {
        this.alternativa2 = alternativa2;
    }

    public String getAlternativa3() {
        return alternativa3;
    }

    public void setAlternativa3(String alternativa3) {
        this.alternativa3 = alternativa3;
    }

    public String getAlternativa4() {
        return alternativa4;
    }

    public void setAlternativa4(String alternativa4) {
        this.alternativa4 = alternativa4;
    }

    public String getRespostaCorreta() {
        return respostaCorreta;
    }

    public void setRespostaCorreta(String respostaCorreta) {
        this.respostaCorreta = respostaCorreta;
    }
}
