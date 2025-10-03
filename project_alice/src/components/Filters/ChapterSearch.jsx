import React, { useState } from "react";
import "../../styles/ChapterSearch.css";

export default function ChapterSearch({
  chapterNumber = 1,
  chapterTitle = "",
  onWordSearch = () => {},
  onLetterSearch = () => {},
  wordCount = 0,
  letterCount = 0,
  characterImg, // passe chapeleiro aqui
  characterAlt = "Chapeleiro Maluco",
}) {
  const [word, setWord] = useState("");
  const [letter, setLetter] = useState("");
  
  return (
    <div className="chapterSearchWrapper">
    {/* Card */}
    <div className="chapterCardInner" aria-label={`Card capítulo ${chapterNumber}`}>
    <div className="cardHeader">
    <div className="chapterNumber">CAPÍTULO {chapterNumber}</div>
    <div className="chapterTitle">{chapterTitle}</div>
    </div>
    
    <div className="cardBody">
    {/* Row 1 */}
    <div className="fieldRow">
    <div className="labelInput">
    <label className="label label-red">Escreva uma palavra:</label>
    <input
    className="textInput"
    type="text"
    placeholder="Exemplo: Alice"
    value={word}
    onChange={(e) => {
      const v = e.target.value;
      setWord(v);
      onWordSearch(v);
    }}
    />
    </div>
    
    <div className="resultWrapper">
    <label className="resultLabel">Aparece:</label>
    <div className="resultSmall">{wordCount} vezes</div>
    </div>
    </div>
    
    {/* Row 2 */}
    <div className="fieldRow">
    <div className="labelInput">
    <label className="label label-red">Quantidade de letras na palavra:</label>
    <input
    className="textInput"
    type="text"
    inputMode="numeric"
    placeholder="Exemplo: 5"
    value={letter}
    onChange={(e) => {
      const v = e.target.value;
      setLetter(v);
      onLetterSearch(v);
    }}
    />
    </div>
    
    <div className="resultWrapper">
    <label className="resultLabel">Aparece:</label>
    <div className="resultSmall">{letterCount} palavras</div>
    </div>
    </div>
    </div>
    
    </div>
    
    {/* Chapeleiro — fica por cima/à esquerda do card */}
    {characterImg && (
      <img
      src={characterImg}
      alt={characterAlt}
      className="characterImageInCard"
      draggable={false}
      />
    )}
    </div>
  );
}
