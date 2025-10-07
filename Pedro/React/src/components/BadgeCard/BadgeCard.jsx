import React from 'react';

function BadgeCard({ chapterName, badgeImagePath, isCompleted }) {
  
  const cardStyle = {
    maxWidth: '200px',
    padding: '15px',
    margin: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: isCompleted ? 1 : 0.4, // Diminui a opacidade se não estiver concluído
    filter: isCompleted ? 'none' : 'grayscale(100%)', // Aplica filtro de cinza
    transition: 'all 0.3s',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px',
    border: isCompleted ? '3px solid gold' : '3px dashed #bbb',
  };

  return (
    <div style={cardStyle}>
      <img 
        src={isCompleted ? badgeImagePath : "src/assets/Images/pattern/cadeado.png"} // Use uma imagem de cadeado genérica para selos bloqueados
        alt={isCompleted ? `Selo do ${chapterName}` : "Selo Bloqueado"}
        style={imageStyle}
      />
      <h4 style={{ margin: '0 0 5px 0', fontSize: '1.1em' }}>
        {chapterName}
      </h4>
      <p style={{ margin: 0, fontSize: '0.9em', color: isCompleted ? 'green' : 'red' }}>
        {isCompleted ? 'Conquistado!' : 'Bloqueado'}
      </p>
    </div>
  );
}

export default BadgeCard;