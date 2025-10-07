import React from "react";
import { useNavigate } from "react-router-dom"; 
import '../../styles/ModalButton.css';

export default function ButtonModal({ to, text }) {
  const navigate = useNavigate();

  return (
    <button 
      className="modalButton"
      onClick={() => navigate('/paginaCapitulos')} 
    >
      Voltar para capítulos
    </button>
  );
}
