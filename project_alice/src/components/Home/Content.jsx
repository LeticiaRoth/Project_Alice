import React from 'react';
import '../../styles/Home.css';

//importando imagens
import Alice from "../../assets/Imagens/Home/ImageAlice.svg";
import WhiteRabbit from "../../assets/Imagens/Home/ImageRabbit.svg";
import CheshireCat from "../../assets/Imagens/Home/ImageCheshireCat.svg";
import Cheap from "../../assets/Imagens/Home/ImageCheap.svg";

const Content = () => {
  return (
    <div className="call-to-action">
    <div className="cta-buttons">
    <button className="cta-button">LER LIVRO</button>
    <button className="cta-button">LER SINOPSE</button>
    </div>
    
    <img src={Cheap} alt="Cartas" className="cheap-img" />
    <img src={Alice} alt="Alice" className="alice-img" />
    <img src={WhiteRabbit} alt="Coelho Branco" className="white-rabbit-img" />
    <img src={CheshireCat} alt="Gato de Cheshire" className="cheshire-cat-img" />
    
    
    </div>
  );
};

export default Content;