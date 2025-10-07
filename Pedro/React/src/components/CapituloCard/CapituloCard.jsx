// CapituloCard.js
import React from 'react';

// Estilização simples para demonstração
const cardStyle = {
  border: '1px solid #ccc',
  padding: '15px',
  margin: '10px',
  borderRadius: '8px',
  width: '250px', // Largura fixa para os cards
  boxShadow: '2px 2px 5px rgba(0,0,0,0.1)',
};

const imageStyle = {
  width: '100%',
  height: 'auto',
  borderRadius: '4px',
  marginBottom: '10px',
};

function CapituloCard({ idCapitulo, nomeCapitulo, personagemSafe, ordem }) {
  return (
    // ... (Estrutura do Card) ...
    <div className="capitulo-card"> 
      {/* ATENÇÃO: Verifique se 'personagem_safe' é um caminho absoluto ou relativo. 
          Se for relativo (como '/images/personagem.png'), ele deve ser acessível 
          pelo servidor web que hospeda o React. Se for um URL completo, funcionará direto. */}
      {personagemSafe && (
        <img 
          src={personagemSafe} 
          alt={`Imagem de ${nomeCapitulo}`} 
          className="capitulo-imagem"
        />
      )}
      
      <h3>{nomeCapitulo}</h3>
      <p>
        <strong>Capítulo #</strong> {ordem}
      </p>
      <small>ID: {idCapitulo}</small>
    </div>
  );
}

export default CapituloCard;