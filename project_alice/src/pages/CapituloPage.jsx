import React, { useState } from "react";
import Navbar from "../components/Navbar";
import BackButton from "../components/BackButton";
import Character from "../components/ChapterBook/Character";
import ChapterSearch from "../components/Filters/ChapterSearch";
import ChapterText from "../components/Filters/ChapterText";

import chapeleiroMaluco from "../assets/Imagens/CapituloPage/ImageChapeleiroMaluco.svg";
import "../styles/CapituloPage.css";
import ProgressBar from "../components/ProgressBar";

export default function CapituloPage() {
  const text1 = `Alice já estava cansada de ficar sentada no banco sem nada para fazer. 
  Por uma ou duas vezes ela xeretou o livro que a irmã lia a seu lado, mas nele não havia figuras nem diálogos. 
  "Para quê serve um livro sem figuras nem diálogos?", Alice pensou. 
  Ela considerava o tanto quanto podia (afinal, o dia quente a deixava zonza e sonolenta) se o prazer de montar uma guirlanda de margaridas valeria o esforço de se levantar para colhê-las. 
  De repente um Coelho Branco de olhos cor-de-rosa passou correndo perto dela.`;
  
  const text2 = `Não havia nada de tão incrível nisso. Alice também não achou nada de mais ouvir o Coelho Branco conversar sozinho: 
  "Ai, ai! Puxa, puxa! Vou me atrasar" — ele dizia. 
  Depois, ao pensar melhor, passou pela cabeça de Alice que ela deveria ter se impressionado mais com isso, mas, no momento, tudo lhe pareceu comum. 
  Só quando o Coelho tirou um relógio do bolso do colete, olhou as horas e saiu apressado, Alice se levantou de repente, queimada de curiosidade, e correu atrás dele.`;
  
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  
  // --- busca palavra ---
  const handleWordSearch = (word) => {
    if (!word) return setWordCount(0);
    const regex = new RegExp(word, "gi");
    const matches = (text1 + " " + text2).match(regex);
    setWordCount(matches ? matches.length : 0);
  };
  
  // --- busca letra ---
  const handleLetterSearch = (letter) => {
    if (!letter) return setLetterCount(0);
    const regex = new RegExp(letter, "gi");
    const matches = (text1 + " " + text2).match(regex);
    setLetterCount(matches ? matches.length : 0);
  };
  
  return (
    <>
    <Navbar />
    
    <div className="chapterPage">
    <div className="chapterHeroWrapper">
    <BackButton />
    
    <div className="chapterHero">
    <Character img={chapeleiroMaluco} alt="Chapeleiro Maluco" />
    
    <ChapterSearch
    chapterNumber={1}
    chapterTitle="Dentro da Toca do Coelho"
    onWordSearch={handleWordSearch}
    onLetterSearch={handleLetterSearch}
    wordCount={wordCount}
    letterCount={letterCount}
    />
    </div>
    </div>
    
    <div className="chapterTexts">
    <ChapterText text={text1} />
    <ChapterText text={text2} />
    </div>
    
    <ProgressBar />
    </div>
    </>
  );
}
