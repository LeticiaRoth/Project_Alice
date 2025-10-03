import React, { useState } from "react";

export default function ChapterSearch({ chapterNumber, chapterTitle, onWordSearch, onLetterSearch, wordCount, letterCount }) {
  const [word, setWord] = useState("");
  const [letter, setLetter] = useState("");

  return (
    <div className="chapterCard">
      <h3 className="chapterSearchTitle">CAPÍTULO {chapterNumber}</h3>
      <h4 className="textSearchTitle">{chapterTitle}</h4>

      <label>Escreva uma palavra:</label>
      <input
        type="text"
        placeholder="Exemplo: Alice"
        value={word}
        onChange={(e) => {
          setWord(e.target.value);
          onWordSearch(e.target.value);
        }}
      />
      <span>Aparece: {wordCount} vezes</span>

      <label>Escreva uma letra:</label>
      <input
        type="text"
        placeholder="Exemplo: A ou a"
        maxLength={1}
        value={letter}
        onChange={(e) => {
          setLetter(e.target.value);
          onLetterSearch(e.target.value);
        }}
      />
      <span>Aparece: {letterCount} vezes</span>
    </div>
  );
}
