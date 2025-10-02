import React from "react";
import { useNavigate } from "react-router-dom";
import '../styles/BackButton.css';

const BackButton = ({ to = '/paginaCapitulos' }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (to) {
            navigate(to);
        } else {
            navigate(-1);
        }
        console.log(`Navegando para: ${to || 'página anterior'}`);
    };
    
    return (
        <div className="backButtonContainer" onClick={handleClick}>
            <button className="backButton">Voltar</button>
        </div>
    );
};

export default BackButton;