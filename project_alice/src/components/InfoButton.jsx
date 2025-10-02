import React, { useState } from 'react';
import infoIcon from '../assets/Icons/IconInfo.svg';
import '../styles/IconInfo.css';

export default function InfoButton({ popupContent }) { // Alterado de popupText para popupContent
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="infoButtonContainer">
      <button className="infoIconButton" onClick={togglePopup}>
        <img src={infoIcon} alt="Informação" className="infoIconImage" />
      </button>

      {showPopup && (
        <div className="infoPopup">
          {/* Renderiza o conteúdo diretamente, permitindo HTML */}
          {popupContent} 
        </div>
      )}
    </div>
  );
}