import React from "react";
import Header from "../components/PageSelo/HeaderContainer";
import BackgroundBlobs from "../components/PageSelo/BackgroundBlobs";

import "../styles/PageSelo.css";

// Imagens decorativas (rabos)
import Decor1 from '../assets/Imagens/SeloPage/Decor1.svg';
import Decor2 from '../assets/Imagens/SeloPage/Decor5.svg';
import Decor3 from '../assets/Imagens/SeloPage/Decor3.svg';
import Decor4 from '../assets/Imagens/SeloPage/Decor4.svg';
import Decor5 from '../assets/Imagens/SeloPage/Decor2.svg'

const SeloPage = () => {
  return (
    <div className="readingPage">
      {/* Fundo animado */}
      <BackgroundBlobs />

      {/* Conteúdo principal */}
      <div className="readingContainer">
        <Header />
        <h2 className="title">SELOS DE LEITURA</h2>
        {/* Espaço vazio onde estavam os círculos */}
        <div className="sealsSpace"></div>
      </div>

      {/* Rabos do gato */}
      <img src={Decor1} alt="Decoração" className="tail tail1" />
      <img src={Decor2} alt="Decoração" className="tail tail2" />
      <img src={Decor3} alt="Decoração" className="tail tail3" />
      <img src={Decor5} alt="Decoração" className="tail tail4" />
      <img src={Decor4} alt="Decoração" className="tail tail5" />
    </div>
  );
};

export default SeloPage;
