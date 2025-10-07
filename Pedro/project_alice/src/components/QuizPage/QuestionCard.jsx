import React from "react";
import AnswerButton from '../QuizPage/AnswerButton';

export default function QuestionCard({ questionNumber, questionText, answers, onAnswer, clockImg }) {
  return (
    <div className="questionCard">
      {/* Cabeçalho + Relógio */}
      <div className="questionHeader">
        PERGUNTA {questionNumber}
        {clockImg && <img src={clockImg} alt="Relógio" className="clockInside" />}
      </div>

      {/* Conteúdo */}
      <div className="questionContent">
        <p>{questionText}</p>
        <div className="answers">
          {answers.map((answer, index) => (
            <AnswerButton 
              key={index} 
              text={answer} 
              onClick={() => onAnswer(answer)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
