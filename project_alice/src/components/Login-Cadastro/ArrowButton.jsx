// ArrowButton.jsx

import React from "react";
import "../../styles/ArrowButton.css";

// Recebe 'text' e 'loading' como props
export default function ArrowButton({ text = "ENTRAR", loading = false }) {
  // A navegação (navigate) foi movida para o componente Login.jsx

  return (
    <button
      className="arrowButton"
      // Usa a prop 'loading' para desabilitar o botão
      disabled={loading} 
      aria-label={text}
      type="submit" // Mantém como type="submit" para acionar o formulário pai
    >
      <span className="arrowVisual" aria-hidden="true"></span>
      {/* O texto agora é dinâmico (Entrar / Entrando...) */}
      <span className="arrowText">{text}</span>
    </button>
  );
}