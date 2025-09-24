import React from 'react';
import '../../styles/Home.css';

// Importando imagens
import Alice from "../../assets/Imagens/Home/ImageAlice.svg";
import WhiteRabbit from "../../assets/Imagens/Home/ImageRabbit.svg";
import Cheap from "../../assets/Imagens/Home/ImageCheap.svg";

import CheriseCat from '../../assets/Imagens/Home/ImageCheshireCat.svg';

const Content = () => {
  return (
    <div className="call-to-action">
    {/* Botões centrais */}
    <div className="cta-buttons">
    <button className="cta-button">Ler livro</button>
    <button className="cta-button">Ler sinopse</button>
    </div>
    
    {/* Imagens decorativas */}
    <img src={Cheap} alt="Cartas" className="cheap-img" />
    <img src={Alice} alt="Alice" className="alice-img" />
    <img src={WhiteRabbit} alt="Coelho Branco" className="white-rabbit-img" />
    
    {/* Cheshire Cat + efeito */}
    <div className="cheshire-cat-wrapper">
    <div className="cheshire-bg"></div>
    <img src={CheriseCat} alt="Cheshire Cat" className="cheshire-cat-img" />
    </div>
    
    </div>
  );
};

export default Content;
