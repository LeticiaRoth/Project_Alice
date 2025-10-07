import React from 'react';
import { useNavigate } from 'react-router-dom';

function CapituloCard({ chapterData, isLocked, isCompleted }) {
    
    const navigate = useNavigate();
    const { capitulo } = chapterData;
    
    let cardClass = "chapter-card ";
    let statusText = "";
    let backgroundUrl = ''; // Renomeado para maior clareza
    
    // 1. Define classes e URL de fundo
    if (isCompleted) {
        cardClass += " completed";
        statusText = `Concluído (${chapterData.progressoUsuarioCapitulo}%)`;
        backgroundUrl = `${capitulo.backgroundCardDesbloqueado}`;
    } else if (isLocked) {
        cardClass += " locked";
        statusText = "Bloqueado";
        backgroundUrl = `${capitulo.backgroundCardBloqueado}`;
    } else {
        cardClass += " unlocked";
        statusText = "Desbloqueado";
        backgroundUrl = `${capitulo.backgroundCardDesbloqueado}`;
    }

    const handleClick = () => {
        if (isLocked) {
            alert("Capítulo bloqueado. Conclua o anterior para acessar.");
            return;
        }
        navigate(`/capitulos/${capitulo.idCapitulo}`);
    };

    return (
        // O container principal define o comportamento de clique
        <div className={cardClass} onClick={handleClick}>
            
            {/* 🚨 NOVO CONTAINER: Engloba a imagem e o texto sobreposto */}
            <div className="image-overlay-container">
                
                {/* 🚨 IMAGEM DE FUNDO: Usa a URL definida */}
                <img src={backgroundUrl} alt={`Background para ${capitulo.nomeCapitulo}`} className="card-background-image" />
                
                {/* 🚨 OVERLAY DE TEXTO: Posicionado absolutamente sobre a imagem */}
                <div className="card-info-overlay">
                    <span className="order">#{capitulo.ordem}</span>
                    <h4 className="title">{capitulo.nomeCapitulo}</h4>
                    <p className="status">{statusText}</p>
                </div>
            </div>
            
            {/* O status duplicado abaixo é removido pois está no overlay */}
            
            {/* 🚨 STYLES CORRIGIDOS PARA OVERLAY */}
            <style jsx>{`
                .chapter-card {
                    border: 1px solid #ddd;
                    margin: 10px;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: all 0.3s;
                    width: 25rem;
                    height: 25rem;
                    overflow: hidden; /* Garante que a borda arredondada se aplique à imagem */
                    padding: 0; /* Remove padding externo para que a imagem preencha */
                    display: inline-block;
                    background: none;
                }
                
                /* --- Container de Imagem e Overlay --- */
                .image-overlay-container {
                    position: relative; /* Define o contexto para o position: absolute do overlay */
                    width: 100%;
                    height: 25rem; /* Altura fixa para todos os cards */
                }

                .card-background-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover; /* Garante que a imagem cubra o container sem distorcer */
                    border-radius: 8px;
                }
                
                /* --- Informações sobrepostas --- */
                .card-info-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between; /* Espaçamento entre os elementos */
                    align-items: flex-start; /* Alinha o conteúdo à esquerda */
                    padding: 15px;
                    /* 🚨 Fundo levemente escuro para melhorar a leitura do texto */
                    background: rgba(0, 0, 0, 0.4); 
                    color: white; /* Cor branca para o texto sobre a imagem */
                    border-radius: 8px;
                }
                
                .card-info-overlay .order {
                    font-size: 1.2em;
                    font-weight: bold;
                }

                .card-info-overlay .title {
                    margin: 0;
                    font-size: 1.5em;
                    text-shadow: 0 0 5px rgba(0, 0, 0, 0.8);
                }
                
                .card-info-overlay .status {
                    margin-bottom: 0;
                    font-size: 1em;
                    font-style: italic;
                }

                /* --- Estilos de Estado --- */
                .locked {
                    opacity: 0.7;
                    cursor: default; 
                }
                .unlocked:hover, .completed:hover {
                    transform: scale(1.02);
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
                }
                
                /* Sobrescreve a cor do texto para o estado 'locked' */
                .locked .card-info-overlay {
                    color: #fff;
                    background: rgba(114, 28, 36, 0.6); /* Cor de bloqueio mais escura */
                }

            `}</style>
        </div>
    );
}
    
export default CapituloCard;