import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/BackButton.css'; 

const BackButton = ({ to = "/", label = "Voltar" }) => {
  const navigate = useNavigate();

  return (
    <button className="backButton" onClick={() => navigate("/paginaCapitulos")}>
      {label}
    </button>
  );
};

export default BackButton;
