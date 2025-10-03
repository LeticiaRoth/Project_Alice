import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ArrowButton.css";

export default function ArrowButton({ text = "ENTRAR", to = "/" }) {
  const navigate = useNavigate();

  return (
    <button className="arrowButton" onClick={() => navigate(to)} aria-label={text}>
      <span className="arrowVisual" aria-hidden="true"></span>
      <span className="arrowText">{text}</span>
    </button>
  );
}
