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
      <div className={`card-content ${alignmentClass}`} style={{ '--card-border-color': step.headingColor, '--card-shadow-color': step.shadowColor }}>
        <h3 className="card-heading" style={{ color: step.headingColor }}>
          {step.heading}
        </h3>
        <p className="card-text">{step.text}</p>

        {/* Botão ou imagem */}
        {(step.buttonImage || step.buttonText) && (
          <div className={`card-button-wrapper ${alignmentClass}`}>
            {/* Renderiza o botão do passo 1 */}
            {step.buttonImage && !step.buttonText && (
              <img src={step.buttonImage} alt="Botão" className="card-button-image" />
            )}

            {/* Renderiza o botão com seta do passo 2 */}
            {step.buttonText && step.id === 2 && (
              <button className="button-with-arrow">
                <span className="button-text">{step.buttonText}</span>
                <img src={step.buttonImage} alt="Seta Entrar" className="button-arrow-image" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TutorialCard;