import React from "react";
import CatImage from "../../assets/Imagens/SeloPage/Cat.svg";
// import BackButtonImage from "../../assets/Imagens/SeloPage/Back.svg";
import '../../styles/PageSelo.css';

const Container = () => {
      return (
            <div className="page-container">
        
        <div className="content">
        <div className="top-bar">
        <button className="back-button">
        {/* <img src={BackButtonImage} alt="Voltar" className="back-arrow" /> */}
        Voltar
        </button>
        
        {/* Imagem do gato */}
        <img src={CatImage} alt="Gato de Cheshire" className="cheshire-cat" />
        </div>
        
        
        
        <h1 className="title">SELOS DE LEITURA</h1>
        
        </div>
        </div>
        
      );
};

export default Container;