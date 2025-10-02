import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/ArrowButton.css';

export default function ArrowButton({ text = "ENTRAR", to = "/" }) {
  const navigate = useNavigate();

  return (
    <button
      className="arrowButton"
      onClick={() => navigate("/tutorial")}
      aria-label={text}
    >
      {/* Classe para a forma da seta */}
      <span className="arrowShape" aria-hidden="true"></span> 
      {/* Classe para o texto */}
      <span className="arrowText">{text}</span>
    </button>
  );
}