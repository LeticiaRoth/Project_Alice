import React from "react";
import InputField from "../components/Login-Cadastro/InputField";
import ContainerForm from "../components/Login-Cadastro/ContainerForm";
import TextLink from "../components/Login-Cadastro/TextLink";

import ChapeuChapeleiro from "../assets/imagens/login/chapeuChapeleiro.svg";
import Relogio from "../assets/imagens/login/relogio.svg";
import Chave from "../assets/imagens/login/chave.svg";
import BuleCha from "../assets/imagens/login/buleCha.svg";


// importando botão 'Entrar'
import ArrowButton from '../components/ArrowButton';
import "../styles/Login.css";

export default function Login() {
  return (
    <div className="loginBackground">
    {/* Card com ícones dentro */}
    <ContainerForm>
    {/* Ícones decorativos */}
    <img src={ChapeuChapeleiro} alt="Hat" className="iconsContainer chapeuChapeleiro" />
    <img src={Relogio} alt="Clock" className="iconsContainer relogio" />
    <img src={Chave} alt="Key" className="iconsContainer chaves" />
    <img src={BuleCha} alt="Teapot" className="iconsContainer buleCha" />
    
    <h2 className="loginTitle">LOGIN</h2>
    
    <InputField 
    label="Seu nome ou username:" 
    type="text" 
    placeholder="Exemplo: MiguelMendes234" 
    required 
    labelColor="default" 
    />
    
    <InputField 
    label="Sua senha:" 
    type="password" 
    placeholder="Exemplo: 123miguel" 
    labelColor="default" 
    />
    
    <TextLink 
    text="Sua primeira vez lendo o livro?" 
    to="/register" 
    />
    
    <ArrowButton 
    text="Entrar" 
    to="/home"
    />
    </ContainerForm>
    </div>
  );
}
