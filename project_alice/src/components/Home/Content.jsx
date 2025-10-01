import React from 'react';
import '../../styles/Home.css';

// Importando imagens
import Alice from "../../assets/Imagens/Home/ImageAlice.svg";
import WhiteRabbit from "../../assets/Imagens/Home/ImageRabbit.svg";
import Cheap from "../../assets/Imagens/Home/ImageCheap.svg";

import CheriseCat from '../../assets/Imagens/Home/ImageCheshireCat.svg';

const Content = () => {
  return (
    <div className="callToAction">
    {/* Botões centrais */}
    <div className="ctaButtons">
    <button className="ctaButton">Ler livro</button>
    <button className="ctaButton">Ler sinopse</button>
    </div>
    
    {/* Imagens decorativas */}
    <img src={Cheap} alt="Cartas" className="cheapImg" />
    <img src={Alice} alt="Alice" className="aliceImg" />
    <img src={WhiteRabbit} alt="Coelho Branco" className="whiteRabbitImg" />
    
    {/* Cheshire Cat + efeito */}
    <div className="cheshireCatWrapper">
    <div className="cheshireBg"></div>
    <img src={CheriseCat} alt="Cheshire Cat" className="cheshireCatImg" />
    </div>
    
    </div>
  );
};

export default Content;
