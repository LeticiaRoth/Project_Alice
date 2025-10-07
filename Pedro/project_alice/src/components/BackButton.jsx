import React from "react";
import '../styles/BackButton.css';

const BackButton = ({ onClick }) => {
    const handleClick = () => {
        console.log('Botão "Voltar" clicado!');
    };
    
    return (
        <div className="backButtonContainer" onClick={handleClick}>
        <button className="backButton">Voltar</button>
        </div>
    );
};

export default BackButton;
