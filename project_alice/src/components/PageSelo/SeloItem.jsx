import React from "react";
// Importa a imagem padrão de selo vazio
import seloVazioImg from '../../assets/Imagens/SeloPage/Selos/SelosVazios/SeloVazio.svg'; 

const SeloItem = ({ seloData }) => {
    
    // Verifica se o selo foi conquistado (se a prop seloData for um objeto válido)
    const isConquistado = !!seloData; 

    // 1. Determina a imagem (Selo Colorido OU Selo Vazio)
    const currentSeloImg = isConquistado 
        ? seloData.selo // Se conquistado, usa o caminho do JSON (objeto 'capitulo')
        : seloVazioImg; // Se bloqueado, usa a imagem padrão de selo vazio
    
    return (
        <div className="seloItem">
            <img 
                src={currentSeloImg} 
                className="seloImage" 
            />
            {/* Exibe o nome do selo/capítulo */}
        </div>
    );
};

export default SeloItem;