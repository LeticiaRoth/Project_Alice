import React from "react";
import InputField from "../components/Login-Cadastro/InputField";
import ArrowButton from '../components/Login-Cadastro/ArrowButton';
import ContainerForm from "../components/Login-Cadastro/ContainerForm";

import CoroaRainha from "../assets/Imagens/Cadastro/CoroaRainha.svg";
import Vallete from "../assets/Imagens/Cadastro/Valette.svg";
import CheapCartTop from "../assets/Imagens/Cadastro/CheapTop.svg";
import CheapCartBottom from "../assets/Imagens/Cadastro/CheapBottom.svg";

import "../styles/Cadastro.css";

export default function Cadastro() {
  return (
    <div className="cadastroBackground">
      <ContainerForm>
        {/* Ícones */}
        <img src={CoroaRainha} alt="Coroa" className="iconsContainer coroaRainha" />
        <img src={CheapCartTop} alt="Carta" className="iconsContainer cheapCartaTop" />
        <img src={Vallete} alt="Lança" className="iconsContainer valleteCopas" />
        <img src={CheapCartBottom} alt="Carta" className="iconsContainer cheapCartaBottom" />

        <h2 className="cadastroTitle">Cadastro</h2>

        <InputField 
          label="Seu nome:" 
          type="text" 
          placeholder="Exemplo: Miguel" 
          required 
        />

        <InputField 
          label="Crie uma senha:" 
          type="password" 
          placeholder="Exemplo: 123miguel" 
        />

        <ArrowButton 
          text="CADASTRAR" 
          onClick={() => alert("Cadastro realizado")} 
        />
      </ContainerForm>
    </div>
  );
}
