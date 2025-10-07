import React from 'react';
import { useNavigate } from 'react-router-dom'; // Se estiver usando rotas

function CapituloCard({ chapterData, isLocked, isCompleted, }) {
  
  const navigate = useNavigate();
  const { capitulo } = chapterData;
  
  let cardClass = "chapter-card ";
  let statusText = "";
  let background = '';
  
  if (isCompleted) {
    cardClass += " completed";
    statusText = `Concluído (${chapterData.progressoUsuarioCapitulo}%)`;
    background = `${chapterData.capitulo.backgroundCardDesbloqueado}`
  } else if (isLocked) {
    cardClass += " locked";
    statusText = "Bloqueado";
    background = `${chapterData.capitulo.backgroundCardBloqueado}`
  } else {
    cardClass += " unlocked";
    statusText = "Desbloqueado";
    background = `${chapterData.capitulo.backgroundCardDesbloqueado}`
  }


  const handleClick = () => {
    if (isLocked) {
      alert("Capítulo bloqueado. Conclua o anterior para acessar.");
      return;
    }

    // 🚨 ALTERADO: Agora, em vez de chamar onRead, navegamos para a página de leitura
    navigate(`/capitulos/${capitulo.idCapitulo}`);

    // Se a lógica de conclusão (onRead) for necessária para um botão "Marcar como Lido" separado,
    // você pode reintroduzi-la fora do handleClick principal.
  };

  return (
    <div className={cardClass} onClick={handleClick}>
      <div className="card-header">
        <span className="order">#{capitulo.ordem}</span>
        <img src={background}/>
        <h4>{capitulo.nomeCapitulo}</h4>
      </div>
      <p className="status">{statusText}</p>
      {/* Estilos JSX permanecem os mesmos */}
      <style jsx>{`
        .chapter-card {
          border: 1px solid #ddd;
          padding: 15px;
          margin: 10px;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s;
          min-width: 250px;
        }
        .locked {
          background-color: #f8d7da;
          color: #721c24;
          opacity: 0.6;
          /* Remove cursor de clique */
          cursor: default; 
        }
        .unlocked {
          background-color: #f7fff7;
          border-left: 5px solid #007bff;
        }
        .completed {
          background-color: #d4edda;
          color: #155724;
          border-left: 5px solid #28a745;
        }
        .chapter-card:not(.locked):hover {
          transform: scale(1.02);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .status {
            font-size: 0.9em;
            font-style: italic;
        }
      `}</style>
    </div>
  );
}
    

export default CapituloCard;