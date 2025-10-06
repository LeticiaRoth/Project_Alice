import React from "react";
import '../../styles/CapitulosPage.css';

const CapituloCard = ({ title, bgImage }) => {
  return (
    <div
      className="chapterCard"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h3>{title}</h3>
    </div>
  );
};


export default CapituloCard;
