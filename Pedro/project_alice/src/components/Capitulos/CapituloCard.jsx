import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/CapitulosPage.css';

const CapituloCard = ({ number, title, subtitle, buttonText, route, bgColor, borderColor, bgImage, image, imageStyle }) => {
  const navigate = useNavigate();

  const backgroundStyle = bgImage
    ? {
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "transparent",
      }
    : {
        backgroundImage: bgColor?.includes("radial-gradient")
          ? bgColor
          : `radial-gradient(circle at center, ${bgColor || "#ffffff"} 0%, #ffffff 100%)`,
      };

  return (
    <div
      className="chapterCard"
      style={{
        ...backgroundStyle,
        borderColor: borderColor || "transparent",
      }}
    >
      {image && (
        <img
          src={image}
          alt={`Capítulo ${number}`}
          className="chapterImage"
          style={imageStyle} 
        />
      )}

      <h3 className="chapterTitle">CAPÍTULO {number}</h3>
      <p className="chapterSubtitle">{title}</p>
      {subtitle && <p className="chapterDescription">{subtitle}</p>}

      {buttonText && (
        <button
          className="chapterButton"
          onClick={() => navigate(route || `/paginaCapitulos/${number}`)}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default CapituloCard;
