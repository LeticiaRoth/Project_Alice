import React from 'react';
import '../../styles/Home.css';

// importa a imagem do cenário
import HeroBg from "../../assets/ImageHome.svg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>Bem-vindo ao My Wordland! Explore esse mundo de palavras e magia.</h1>
        <p>
          Aqui você pode ler a obra completa da Alice no País das maravilhas!
          Cuidado para não se perder na toca do coelho...
        </p>
        <button className="start-button">
          COMEÇAR <span className="arrow">➜</span>
        </button>
      </div>

      <div className="hero-image">
        <img src={HeroBg} alt="Cenário Wonderland" />
      </div>
    </div>
  );
};

export default HeroSection;
