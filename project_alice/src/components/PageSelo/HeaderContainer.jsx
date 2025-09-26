import React from "react";
import Cat from '../../assets/Imagens/SeloPage/Cat.svg';
import BackButton from '../../components/BackButton';

const HeaderContainer = () => {
  return (
    <div className="header">
      {/* Botão Voltar */}
      <BackButton />

      {/* Gato */}
      <img src={Cat} alt="Gato sorridente" className="cat" />
    </div>
  );
};

export default HeaderContainer;
