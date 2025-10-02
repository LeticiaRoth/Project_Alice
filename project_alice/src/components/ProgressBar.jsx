import React, { useState } from "react";
import buttonLeft from '../assets/Imagens/CapituloPage/ImageButtonLeft.svg';
import buttonRight from '../assets/Imagens/CapituloPage/ImageButtonRight.svg';

import '../styles/ProgressBar.css';

export default function ProgressBar({ totalSteps = 5 }) {
  const [currentStep, setCurrentStep] = useState(2); // exemplo, passo atual

  const handlePrev = () => {
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="progressBarWrapper">
      <img
        src={buttonLeft}
        alt="Anterior"
        className="navArrow"
        onClick={handlePrev}
      />

      <div className="progressBar">
        <div
          className="progressFill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <img
        src={buttonRight}
        alt="Próximo"
        className="navArrow"
        onClick={handleNext}
      />
    </div>
  );
}
