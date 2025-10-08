import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/CapitulosPage.css";

const CapituloCard = ({
  number,
  title,
  subtitle,
  buttonText,
  route,
  bgColor,
  borderColor,
  bgImage,
  image,
  imageStyle,
  extraDecorations = [], 
}) => {
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
    {/* Imagem do personagem */}
    {image && (
      <img
      src={image}
      alt={`Capítulo ${number}`}
      className="chapterImage"
      style={imageStyle}
      />
    )}
    
    {/* Decoração extra */}
    {extraDecorations.map((decor, index) => (
      <img
      key={index}
      src={decor.src}
      alt=""
      className="chapterExtraDecor"
      style={{
        position: "absolute",
        pointerEvents: "none",
        ...decor.style,
        zIndex: decor.style?.zIndex ?? 1,
      }}
      />
    ))}
    
    {/* Textos */}
    <h3 className="chapterTitle">CAPÍTULO {number}</h3>
    <p className="chapterSubtitle">{title}</p>
    {subtitle && <p className="chapterDescription">{subtitle}</p>}
    
    {/* Botão */}
    {buttonText && (
      <button
      className="chapterButton"
      onClick={() => navigate(`/paginaCapitulos/${number}`)}
      >
      {buttonText}
      </button>
    )}
    </div>
  );
};

export default CapituloCard;