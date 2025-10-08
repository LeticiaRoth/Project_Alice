package br.com.chapeleiro.chapeleiro.aplicacao.pergunta;

import br.com.chapeleiro.chapeleiro.aplicacao.quiz.QuizModel;

public record PerguntaDto(String nomePergunta,
                          String textoPergunta,
                          QuizModel quiz,
                          String alternativa1,
                          String alternativa2,
                          String alternativa3,
                          String alternativa4,
                          String respostaCorreta) {
}
