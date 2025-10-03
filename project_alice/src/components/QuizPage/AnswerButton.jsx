import React from "react";
import '../../styles/QuizPage.css';

export default function BotaoResposta({ text, onClick }) {
  return (
    <button className="answerButton" onClick={onClick}>
      {text}
    </button>
  );
}
