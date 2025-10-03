import React, { useState } from "react";
import Navbar from "../components/NavbarTwo";
import BackButton from "../components/BackButton";
import Character from "../components/ChapterBook/Character";
import ChapterSearch from "../components/Filters/ChapterSearch";
import ChapterText from "../components/Filters/ChapterText";
import ProgressBar from "../components/ProgressBar";

import chapeleiroMaluco from "../assets/Imagens/CapituloPage/ImageChapeleiroMaluco.svg";

import "../styles/CapituloPage.css";

export default function CapituloPage() {
  const text1 = `Alice já estava cansada de ficar sentada no banco sem nada para fazer. 
  Por uma ou duas vezes ela xeretou o livro que a irmã lia a seu lado, 
  mas nele não havia figuras nem diálogos. 
  “Para que serve um livro sem figuras nem diálogos?”, Alice pensou. 
  Ela considerava o tanto quanto podia (afinal, o dia quente a deixava zonza e sonolenta) 
  se o prazer de montar uma guirlanda de margaridas valeria o esforço de se levantar para colhê-las. 
  Foi quando, de repente, um Coelho Branco de olhos cor-de-rosa passou correndo perto dela.`;
  
  const text2 = `Não havia nada de tão incrível nisso. Alice também não achou nada de mais ouvir o Coelho Branco conversar sozinho: 
  — Ai, rapaz! Ai, rapaz! Vou me atrasar — ele dizia. 
  Depois, ao pensar melhor, passou pela cabeça de Alice que ela deveria ter se impressionado 
  mesmo que só um pouquinho com aquilo. 
  Na hora, entretanto, tudo lhe pareceu completamente normal. 
  Alice só se alvoroçou quando o Coelho Branco sacou um relógio do bolso de seu colete, 
  checou as horas e saiu apressado.`;
  
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  
  const handleWordSearch = (word) => {
    if (!word) return setWordCount(0);
    const regex = new RegExp(word, "gi");
    const matches = (text1 + " " + text2).match(regex);
    setWordCount(matches ? matches.length : 0);
  };
  
  const handleLetterSearch = (letter) => {
    if (!letter) return setLetterCount(0);
    const regex = new RegExp(letter, "gi");
    const matches = (text1 + " " + text2).match(regex);
    setLetterCount(matches ? matches.length : 0);
  };
  
  return (
    <>
    {/* Navbar azul */}
    <Navbar bgColor="bgBlue" />
    
    <div className="button">
      {/* Botão Voltar */}
    <BackButton className="buttonLeft"  />
    </div>

    <div className="chapterPage">
    
    {/* Texto introdutório */}
    <div className="chapterIntro">
    <h4>INTERAJA COM O LIVRO</h4>
    <p>
    Pesquise as palavras e letras dentro do nosso capítulo, digite a
    palavra ou letra desejada e ela será grifada nas páginas.
    </p>
    </div>
    
    {/* Personagem + Card */}
    <div className="chapterHeroWrapper">
    <div className="chapterHero">
      
    <ChapterSearch
    chapterNumber={1}
    chapterTitle="Dentro da Toca do Coelho"
    onWordSearch={handleWordSearch}
    onLetterSearch={handleLetterSearch}
    wordCount={wordCount}
    letterCount={letterCount}
    characterImg={chapeleiroMaluco}
    characterAlt="Chapeleiro Maluco"
    />
    
    </div>
    </div>
    
    {/* Livro aberto */}
    <div className="bookWrapper">
    <div className="chapterTexts">
    <ChapterText text={text1} />
    <ChapterText text={text2} />
    </div>
    </div>
    
    {/* Barra de progresso + setas */}
    <div className="progressBarWrapper">
    <ProgressBar totalSteps={5} currentStep={2} />
    </div>
    </div>
    </>
  );
}
