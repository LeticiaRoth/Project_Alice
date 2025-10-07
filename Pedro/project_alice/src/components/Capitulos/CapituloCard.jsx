import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/CapitulosPage.css'

import Coelho from "../../assets/Imagens/CapitulosPage/Personagem/ImageCoelho.svg";
import Macaneta from "../../assets/Imagens/CapitulosPage/Personagem/ImageMacaneta.svg";
import Dodo from "../../assets/Imagens/CapitulosPage/Personagem/ImageDodo.svg";
import Abillio from "../../assets/Imagens/CapitulosPage/Personagem/ImageAbillio.svg";
import Lagarta from "../../assets/Imagens/CapitulosPage/Personagem/ImageLagarta.svg";
import Duquesa from "../../assets/Imagens/CapitulosPage/Personagem/ImageDuquesa.svg";
import ChapeleiroMaluco from "../../assets/Imagens/CapitulosPage/Personagem/ImageChapeleiroMaluco.svg";
import Alice from "../../assets/Imagens/CapitulosPage/Personagem/ImageAlice.svg";

// Fundos
import BgCoelho from "../../assets/Imagens/CapitulosPage/BackgroundCard/BgCoelho.svg";
import BgMacaneta from "../../assets/Imagens/CapitulosPage/BackgroundCard/BgMacaneta.svg";
import BgDodo from "../../assets/Imagens/CapitulosPage/BackgroundCard/BgDodo.svg";

const CapituloCard = ({ number, title, subtitle, buttonText, route, bgColor, borderColor, bgImage, image }) => {
  const navigate = useNavigate();
  
  return (
    <div
      className="chapterCard"
      style={{
        backgroundColor: bgImage ? "transparent" : bgColor,
        borderColor: borderColor,
        backgroundImage: bgImage ? `url(${bgImage})` : "none",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {image && <img src={image} alt={`Capítulo ${number}`} className={`chapterImage img-${number}`} />}

      <h3 className="chapterTitle">CAPÍTULO {number}</h3>
      <p className="chapterSubtitle">{title}</p>
      {subtitle && <p className="chapterDescription">{subtitle}</p>}

      {buttonText && (
        <button className="chapterButton" onClick={() => navigate(`/paginaCapitulos/${number}`)}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CapituloCard;
