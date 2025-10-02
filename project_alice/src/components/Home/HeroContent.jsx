import React from "react";
import { useNavigate } from "react-router-dom";

function HeroContent() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/login");
  };

  return (
    <div className="heroContent">
      <h1>
        <span>Bem-vindo ao My Wordland!</span>
        <span>Explore esse mundo de</span>
        <span>palavras e magia.</span>
      </h1>

      <p>
        Aqui você pode ler a obra completa da{" "}
        <span className="highlight">Alice no País das Maravilhas</span>!
      </p>
      <p>Cuidado para não se perder na toca do coelho...</p>

      <button className="startButton" onClick={handleStart}>
        Começar
      </button>
    </div>
  );
}

export default HeroContent;
