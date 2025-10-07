import React from 'react';
import { useNavigate } from "react-router-dom";


// importando imagens separadas em componentes
import AliceImg from '../../components/Home/CardsPersonagens/AliceImg';
import CheapCartsImg from  '../../components/Home/CardsPersonagens/CheapCartsImg';
import WhiteRabbitImg from  '../../components/Home/CardsPersonagens/WhiteRabbitImg';
import CheshireImg from '../../components/Home/CardsPersonagens/CheshireImg';

const Content = () => {
  const navigate = useNavigate();

  const handleLivro = () => {
    navigate("/paginaCapitulos");
  };

  const handleSinopse = () => {
    navigate("/paginaSinopse");
  }

  return (
    <div className="callToAction">
      {/* Botões */}
      <div className="ctaButtons">
        <button className="ctaButton" onClick={handleLivro}>Ler Livro</button>
        <button className="ctaButton">Ler Sinopse</button>
      </div>

      {/* Imagens */}
      <CheapCartsImg />
      <AliceImg />
      <WhiteRabbitImg />
      <CheshireImg />
    </div>
  );
};

export default Content;
