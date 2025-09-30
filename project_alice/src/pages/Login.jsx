import React from "react";
import InputField from "../components/Login-Cadastro/InputField";
import Button from "../components/Login-Cadastro/Button";
import ContainerForm from "../components/Login-Cadastro/ContainerForm";
import TextLink from "../components/Login-Cadastro/TextLink";

import ChapeuChapeleiro from "../assets/Imagens/Login/ChapeuChapeleiro.svg";
import Relogio from "../assets/Imagens/Login/Relogio.svg";
import Chave from "../assets/Imagens/Login/Chave.svg";
import BuleCha from "../assets/Imagens/Login/BuleCha.svg";

import "../styles/Login.css";

export default function Login() {
  return (
    <div className="loginBackground">
      {/* Ícones */}
      <img src={ChapeuChapeleiro} alt="Hat" className="icon hat" />
      <img src={Relogio} alt="Clock" className="icon clock" />
      <img src={Chave} alt="Key" className="icon key" />
      <img src={BuleCha} alt="Teapot" className="icon teapot" />

      {/* Card */}
      <ContainerForm>
        <h2 className="loginTitle">LOGIN</h2>

        <InputField label="Seu nome:" type="text" placeholder="Exemplo: Miguel" required />
        <InputField label="Sua senha:" type="password" placeholder="Exemplo: 123miguel"/>

        <TextLink text="Sua primeira vez lendo o livro?" to="/register" />

        <Button text="ENTRAR" onClick={() => alert("Login clicado")} />
      </ContainerForm>
    </div>
  );
}
