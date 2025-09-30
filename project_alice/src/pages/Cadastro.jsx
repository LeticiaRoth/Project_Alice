import React from "react";
import InputField from "../components/Login-Cadastro/InputField";
import Button from "../components/Login-Cadastro/Button";
import ContainerForm from "../components/Login-Cadastro/ContainerForm";

import Vallete from "../assets/Imagens/Cadastro/Valette.svg";
import Coroa from "../assets/Imagens/Cadastro/Coroa.svg";
import CheapTop from "../assets/Imagens/Cadastro/CheapTop.svg";
import CheapBottom from "../assets/Imagens/Cadastro/CheapBottom.svg";

import '../styles/Cadastro.css';

export default function Cadastro() {
  return (
    <div className="cadastroBackground">
      {/* Ícones decorativos */}
      <img src={Vallete} alt="Card Soldier" className="icon soldier" />
      <img src={Coroa} alt="Crown" className="icon crown" />

      {/* cartas jogadas no fundo */}
      <img src={CheapTop} alt="Cards" className="icon card1" />
      <img src={CheapBottom} alt="Cards" className="icon card2" />

      {/* Card central */}
      <ContainerForm>
        <h2 className="registerTitle">Cadastro</h2>

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

        <Button text="Entrar" onClick={() => alert("Cadastro realizado")} />
      </ContainerForm>
    </div>
  );
}
