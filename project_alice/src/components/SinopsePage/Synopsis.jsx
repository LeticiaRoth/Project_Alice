import React from "react";

export default function Synopsis({ title, bookImage, description }) {
  return (
    <div className="synopsisContainer">
      <h2 className="synopsisTitle">Sinopse</h2>
      <h3 className="synopsisBookTitle">{title}</h3>
      <div className="synopsisContent">
        <img src={bookImage} alt="Livro" className="bookImage"/>
        <p className="synopsisText">{description}</p>
      </div>
    </div>
  );
}
