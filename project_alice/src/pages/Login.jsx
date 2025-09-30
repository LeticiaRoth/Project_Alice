import React from "react";
import LoginForm from "../components/Login/InputForm"
import "../styles/Login.css";

// Importando imagens decorativas
import ChapeuChapeleiro from "../assets/Imagens/Login/ChapeuChapeleiro.svg"
import Relogio from "../assets/Imagens/Login/Relogio.svg"
import Chave from "../assets/Imagens/Login/Chave.svg"
import BuleCha from "../assets/Imagens/Login/BuleCha.svg"


const Login = () => {
  return (
    <div className="loginPage">
      {/* Imagens decorativas */}
      <img src={ChapeuChapeleiro} alt="Chapéu" className="decor hat" />
      <img src={Relogio} alt="Relógio" className="decor clock" />
      <img src={Chave} alt="Chave" className="decor key" />
      <img src={BuleCha} alt="Bule" className="decor teapot" />

      {/* Container branco do formulário */}
      <div className="loginBox">
        <h1 className="loginTitle">LOGIN</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
