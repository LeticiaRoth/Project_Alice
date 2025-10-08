import React from "react";
import Navbar from "../components/Navbar"; // importa a Navbar
import Synopsis from "../components/SinopsePage/Synopsis";
import Character from "../components/ChapterBook/Character";

import aliceImage from "../assets/Imagens/Sinopse/AliceImage.svg";
import bookCover from "../assets/Imagens/Sinopse/LivroImage.svg";
import backgroundSinopse from '../assets/Imagens/Sinopse/FundoImage.svg';
import SinopseImage from '../assets/Imagens/Sinopse/SinopseImage.svg';

import "../styles/SinopsePage.css";

export default function SinopsePage() {
  return (
    <div 
      className="sinopsePage"
      style={{ backgroundImage: `url(${backgroundSinopse})` }}
    >
      <Navbar bgColor="bgBlue"/>
      <div className="homeContainer">
        <Character img={aliceImage} alt="Alice" />
        <Synopsis 
          title="Alice no País das Maravilhas" 
          bookImage={bookCover} 
          description={`Imagine a seguinte história: Alice, uma menina super curiosa,
          segue um Coelho Branco apressado e cai em um mundo mágico e maluco.
          Lá, ela vira um gigante e depois fica pequenininha, encontra personagens
          como um gato que sorri e uma rainha que gosta de gritar. É uma aventura
          cheia de sonhos, mistérios e muita diversão!`} 
        />
      </div>
    </div>
  );
}

 