import React from 'react';
import '../../styles/Home.css';
import ImageBackground from "../../assets/ImageHome.svg";

const HeroSection = () => {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${ImageBackground})` }}>
      <div className="hero-content">
        <h1>
          Bem-vindo ao My Wordland! <br />
          Explore esse mundo de <br />
          palavras e magia.
        </h1>
       <p>
        Aqui você pode ler a obra completa da <span class="highlight">Alice no País das Maravilhas</span>!
        Cuidado para não se perder na toca do coelho...
       </p>
        <button className="start-button">
          Começar
          {/*<span className="arrow">➜</span> */}
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
