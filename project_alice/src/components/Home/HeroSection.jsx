import React from 'react';
import '../../styles/Home.css';
import CastleImg from "../../assets/ImageHome.svg";

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="heroContent">
        <h1>
          Bem-vindo ao My Wordland! <br />
          Explore esse mundo de <br />
          palavras e magia.
        </h1>
        <p>
          Aqui você pode ler a obra completa da <span className="highlight">Alice no País das Maravilhas</span>!<br />
          Cuidado para não se perder na toca do coelho...
        </p>
        <button className="startButton">Começar</button>
      </div>

      {/* Castelo responsivo e destacado */}
      <div className="castleWrapper">
        <img src={CastleImg} alt="Castelo" className="castleImg" />
      </div>
    </section>
  );
};

export default HeroSection;
