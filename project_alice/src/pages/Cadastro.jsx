import React from "react";
import InputField from "../components/Login-Cadastro/InputField";
import Button from "../components/Login-Cadastro/Button";
import ContainerForm from "../components/Login-Cadastro/ContainerForm";

import Coroa from "../assets/Imagens/Cadastro/Coroa.svg";
import Vallete from "../assets/Imagens/Cadastro/Valette.svg";
import Carta1 from "../assets/Imagens/Cadastro/CheapTop.svg";
import Carta2 from "../assets/Imagens/Cadastro/CheapBottom.svg";

import "../styles/Cadastro.css";

export default function Cadastro() {
  return (
    <div className="registerBackground">
      <ContainerForm>
        {/* Ícones */}
        <img src={Coroa} alt="Coroa" className="icon crown" />
        <img src={Vallete} alt="Lança" className="icon spear" />
        <img src={Carta1} alt="Carta" className="icon cardIcon" style={{ top: "10px", left: "20px" }} />
        <img src={Carta2} alt="Carta" className="icon cardIcon" style={{ bottom: "20px", right: "30px" }} />

        <h2 className="registerTitle">CADASTRO</h2>

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

        <Button 
          text="CADASTRAR" 
          onClick={() => alert("Cadastro realizado")} 
        />
      </ContainerForm>
    </div>
  );
}
