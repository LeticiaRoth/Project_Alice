import React from "react";

// Importando imagens
import AliceImage from '../assets/Imagens/Sinopse/AliceImage.svg';
import LivroImage from '../assets/Imagens/Sinopse/LivroImage.svg';
import FundoImage from '../assets/Imagens/Sinopse/FundoImage.svg';

import Sinopse from '../components/SinopsePage/Sinopse';
import Navbar from '../components/Navbar';

// Estilização
import '../styles/SinopsePage.css';

export default function SinopsePage() {
  return (
    <>
    <Navbar bgColor="bgBlue" />
    <div className="containerSinopse">
    
    {/* Fundo fixo */}
    <img src={FundoImage} alt="Fundo" className="backgroundImage" />
    
    
    
    {/* Área principal */}
    <div className="contentWrapper">
    
    {/* Alice */}
    <img src={AliceImage} alt="Alice" className="aliceImage" />
    
    {/* Livro */}
    <img src={LivroImage} alt="Livro aberto" className="bookOpen" />
    
    {/* Caixa da sinopse */}
    <Sinopse />
    </div>
    </div>
    </>
  );
}

