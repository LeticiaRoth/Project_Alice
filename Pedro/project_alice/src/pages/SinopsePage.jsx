import React from "react";
import Navbar from "../components/Navbar"; 
import Synopsis from "../components/SinopsePage/Synopsis";
import Character from "../components/ChapterBook/Character";

import AliceImage from "../assets/Imagens/Sinopse/AliceImage.svg";
import LivroImage from "../assets/Imagens/Sinopse/LivroImage.svg";
import FundoImage from "../assets/Imagens/Sinopse/FundoImage.svg";

import "../styles/SinopsePage.css";

export default function SinopsePage() {
  return (
    <>
      <Navbar bgColor="bgBlue" />

      <div className="containerSinopse">
        {/* Fundo fixo */}
        <img src={FundoImage} alt="Fundo" className="backgroundImage" />

        {/* Área principal */}
        <div className="contentWrapper">
          {/* Alice */}
          <Character img={AliceImage} alt="Alice" className="aliceImage" />

          {/* Livro */}
          <img src={LivroImage} alt="Livro aberto" className="bookOpen" />

          {/* Caixa da sinopse */}
          <Synopsis 
          />
        </div>
      </div>
    </>
  );
}
 