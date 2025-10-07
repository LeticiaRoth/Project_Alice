// src/pages/SeloPage.jsx
import React from "react"; 
import Header from "../components/PageSelo/HeaderContainer";
import BackgroundBlobs from "../components/PageSelo/BackgroundBlobs";
import SeloItem from "../components/PageSelo/SeloItem";

import "../styles/PageSelo.css";

// Imagens decorativas
import Decor1 from '../assets/Imagens/SeloPage/Decor1.svg';
import Decor2 from '../assets/Imagens/SeloPage/Decor5.svg';
import Decor3 from '../assets/Imagens/SeloPage/Decor3.svg';
import Decor4 from '../assets/Imagens/SeloPage/Decor4.svg';
import Decor5 from '../assets/Imagens/SeloPage/Decor2.svg';

const SeloPage = () => {
  // Exemplo (isso vai vir do back-end depois)
  const selos = Array(12).fill(null); // 12 posições vazias por padrão
  
  return (
    <div className="readingPage">
    <BackgroundBlobs />
    
    <div className="readingContainer">
    <Header />
    <h2 className="title">SELOS DE LEITURA</h2>
    
    <div className="sealsGrid">
    {selos.map((value, index) => (
      <SeloItem key={index} value={value} />
    ))}
    </div>
    
    </div>
    
    {/* Rabos decorativos */}
    <img src={Decor1} alt="Decoração" className="tail tail1" />
    <img src={Decor2} alt="Decoração" className="tail tail2" />
    <img src={Decor3} alt="Decoração" className="tail tail3" />
    <img src={Decor5} alt="Decoração" className="tail tail4" />
    <img src={Decor4} alt="Decoração" className="tail tail5" />
    </div>
  );
};

export default SeloPage;
