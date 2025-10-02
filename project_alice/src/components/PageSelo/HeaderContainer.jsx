import React from "react";
import Cat from '../../assets/Imagens/SeloPage/Cat.svg';
import BackButton from '../../components/BackButton';
import '../../styles/PageSelo.css';

const HeaderContainer = () => {
  return (
    <div className="headerContainer">
      <BackButton />
      <img src={Cat} alt="Gato sorridente" className="catImage" />
    </div>
  );
};

export default HeaderContainer;
