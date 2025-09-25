import React from 'react';

const StepCard = ({ img, title, description, button }) => {
  return (
    <div className="step-card">
      <img src={img} alt="Etapa" className="step-img" />
      <div className="step-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {button && <button className={`step-button ${button.className}`}>{button.text}</button>}
      </div>
    </div>
  );
};

export default StepCard;
