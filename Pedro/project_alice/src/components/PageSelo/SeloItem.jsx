import React from "react";
import seloImg from '../../assets/Imagens/SeloPage/Selos/SelosVazios/SeloVazio.svg'; 

const SeloItem = ({ value }) => {
  return (
    <div className="seloItem">
      <img src={seloImg} alt="Selo de leitura" className="seloImage" />
      {/* Valor do back-end pode aparecer dentro */}
      {value && <span className="seloValue">{value}</span>}
    </div>
  );
};

export default SeloItem;
