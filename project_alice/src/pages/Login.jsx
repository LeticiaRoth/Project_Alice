import React from "react";
import InputField from "../components/Login-Cadastro/InputField";
import ContainerForm from "../components/Login-Cadastro/ContainerForm";
import TextLink from "../components/Login-Cadastro/TextLink";

// Ícones
import ChapeuChapeleiro from "../assets/imagens/login/chapeuChapeleiro.svg";
import Relogio from "../assets/imagens/login/relogio.svg";
import Chave from "../assets/imagens/login/chave.svg";
import BuleCha from "../assets/imagens/login/buleCha.svg";

// Botão
import ArrowButton from '../components/ArrowButton';
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="loginBackground">
      {/* Card branco */}
      <ContainerForm>
        {/* Ícones decorativos */}
        <img src={ChapeuChapeleiro} alt="Chapéu" className="iconsContainer chapeuChapeleiro" />
        <img src={Relogio} alt="Relógio" className="iconsContainer relogio" />
        <img src={Chave} alt="Chave" className="iconsContainer chaves" />
        <img src={BuleCha} alt="Bule de Chá" className="iconsContainer buleCha" />

        {/* Título */}
        <h2 className="loginTitle">LOGIN</h2>

        {/* Campo username */}
        <InputField 
          label="Seu nome ou username:" 
          type="text" 
          placeholder="Exemplo: MiguelMendes234" 
          required 
        />

        {/* Campo senha */}
        <InputField 
          label="Sua senha:" 
          type="password" 
          placeholder="Exemplo: 123miguel" 
          required 
        />

        {/* Link cadastro */}
        <TextLink 
          text="Sua primeira vez lendo o livro?" 
          to="/register" 
        />

        {/* Botão */}
        <ArrowButton text="Entrar" to="/paginaCapitulos" />
      </ContainerForm>
    </div>
  );
}
