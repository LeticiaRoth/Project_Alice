import React from 'react';

const TutorialCard = ({ step }) => {
  const alignmentClass = step.isRightAligned ? 'rightAligned' : 'leftAligned';

  return (
    <div className={`cardWrapper ${alignmentClass}`}>
      
      {/* número indicando o passo a passo */}
      {step.image && (
        <div className={`stepNumberWrapper ${alignmentClass}`}>
          <img
            src={step.image}
            alt={`Passo ${step.id}`}
            className="stepNumberImage"
          />
        </div>
      )}

      {/* card */}
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

        {/* imagens dos botões */}
        {step.buttonImage || step.buttonText ? (
          <div className={`cardButtonWrapper ${alignmentClass}`}>
            {step.buttonText ? (
              <button className="buttonEntrar">
                <span className="buttonText">{step.buttonText}</span>
                {step.buttonImage && (
                  <img
                    src={step.buttonImage}
                    alt="Ícone botão"
                    className="imageButtonEntrar"
                  />
                )}
              </button>
            ) : (
              <img
                src={step.buttonImage}
                alt="Botão"
                className="buttonCard"
              />
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default TutorialCard;
