import React from "react";
import '../styles/BackButton.css';
import { useNavigate } from "react-router-dom";

const BackButton = ({ onClick }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/paginaCapitulos");
    };
    
    return (
        <div className="backButtonContainer" onClick={handleClick}>
        <button className="backButton">Voltar</button>
        </div>
    );
};

export default BackButton;
