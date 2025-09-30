import React from "react";
import RegisterForm from "../components/RegisterForm";
import "../styles/RegisterPage.css";

// Importando imagens decorativas
import Crown from "../assets/crown.svg";
import Cards from "../assets/cards.svg"; 
import Soldier from "../assets/soldier.svg";

const Cadastro = () => {
  return (
    <div className="registerPage">
      {/* Imagens decorativas */}
      <img src={Crown} alt="Coroa" className="decor crown" />
      <img src={Cards} alt="Cartas" className="decor cards" />
      <img src={Soldier} alt="Soldado de Copas" className="decor soldier" />

      {/* Caixa branca centralizada */}
      <div className="registerBox">
        <h1 className="registerTitle">CADASTRO</h1>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Cadastro;
