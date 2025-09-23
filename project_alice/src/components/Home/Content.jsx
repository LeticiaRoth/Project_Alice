import React from "react";

//puxando as imagens
import Alice from "../../assets/Imagens/Home/ImageAlice.svg"
import Cheap from "../../assets/Imagens/Home/ImageCheap.svg"
import Rabbit from "../../assets/Imagens/Home/ImageRabbit.svg"
import Cat from "../../assets/Imagens/Home/ImageCat.svg"

export default function Content() {
  return (
    <main className="content">
      <div className="illustrations">
        <img src={Alice} alt="Alice lendo" className="alice" />
        <img src={Rabbit} alt="Coelho branco" className="coelho" />
        <img src={Cheap} alt="Cartas mágicas" className="cartas" />
        <img src={Cat} alt="Buraco no chão" className="buraco" />
      </div>
      <div className="buttons">
        <button className="btn-secondary">LER LIVRO</button>
        <button className="btn-secondary">LER SINOPSE</button>
      </div>
    </main>
  );
}
