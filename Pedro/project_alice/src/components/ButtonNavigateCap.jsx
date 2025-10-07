import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ButtonNavigateCap.css";

const ButtonNavigateCap = ({ to, label }) => {
  const navigate = useNavigate();

  return (
    <button className="navigationButton" onClick={() => navigate(to)}>
      {label}
    </button>
  );
};

export default ButtonNavigateCap;
