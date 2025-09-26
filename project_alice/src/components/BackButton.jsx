import React from "react";
import '../styles/BackButton.css';
import BackSeta from '../assets/Imagens/BackSeta.svg'; // Corrigido

const BackButton = ({ onClick }) => {
    const handleClick = () => {
        console.log('Botão "Voltar" clicado!');
    };
    
    return (
        <div className="back-button-container" onClick={handleClick}>
        <button className="back-button">Voltar</button>
        </div>
    );
};

export default BackButton;
