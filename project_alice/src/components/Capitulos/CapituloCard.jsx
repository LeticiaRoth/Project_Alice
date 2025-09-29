import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/CapitulosPage.css'

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
        <button className="chapterButton" onClick={() => navigate(route)}>
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CapituloCard;
