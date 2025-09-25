import React from 'react';

const TutorialCard = ({ step }) => {
  const alignmentClass = step.isRightAligned ? 'right-aligned' : 'left-aligned';

  return (
    <div className={`card-wrapper ${alignmentClass}`}>
      {/* Número do passo */}
      {step.image && (
        <div className={`step-number-wrapper ${alignmentClass}`}>
          <img src={step.image} alt={`Passo ${step.id}`} className="step-number-image" />
        </div>
      )}

      {/* Conteúdo do card */}
      <div className={`card-content ${alignmentClass}`}>
        <h3 className="card-heading" style={{ color: step.headingColor }}>
          {step.heading}
        </h3>
        <p className="card-text">{step.text}</p>

        {/* Botão ou imagem */}
        {(step.buttonImage || step.buttonText) && (
          <div className={`card-button-wrapper ${alignmentClass}`}>
            {step.buttonImage && !step.buttonText && (
              <img src={step.buttonImage} alt="Botão" className="card-button-image" />
            )}

            {step.buttonText && step.buttonImage && step.id === 2 && (
              <div className="button-with-arrow">
                <span className="button-text">{step.buttonText}</span>
                <img src={step.buttonImage} alt="Seta Entrar" className="button-arrow-image" />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialCard;
