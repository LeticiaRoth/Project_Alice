import React from 'react';

const TutorialCard = ({ step }) => {
  const alignmentClass = step.isRightAligned ? 'rightAligned' : 'leftAligned';

  return (
    <div className={`cardWrapper ${alignmentClass}`}>
      {/* Número do passo */}
      {step.image && (
        <div className={`stepNumberWrapper ${alignmentClass}`}>
          <img src={step.image} alt={`Passo ${step.id}`} className="stepNumberImage" />
        </div>
      )}

      {/* Conteúdo do card */}
      <div
        className={`cardContent ${alignmentClass}`}
        style={{
          '--card-border-color': step.headingColor,
          '--card-shadow-color': step.shadowColor
        }}
      >
        <h3 className="cardHeading" style={{ color: step.headingColor }}>
          {step.heading}
        </h3>
        <p className="cardText">{step.text}</p>

        {/* Botão ou imagem */}
        {(step.buttonImage || step.buttonText) && (
          <div className={`cardButtonWrapper ${alignmentClass}`}>
            {/* Botão imagem (passo 1) */}
            {step.buttonImage && !step.buttonText && (
              <img src={step.buttonImage} alt="Botão" className="cardButtonImage" />
            )}

            {/* Botão com seta (passo 2) */}
            {step.buttonText && step.id === 2 && (
              <button className="buttonWithArrow">
                <span className="buttonText">{step.buttonText}</span>
                <img
                  src={step.buttonImage}
                  alt="Seta Entrar"
                  className="buttonArrowImage"
                />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialCard;
