import React from 'react';
import TutorialCard from './TutorialCard';

const TutorialContainer = ({ steps }) => (
  <div className="tutorial-container">
    <h1 className="tutorial-title">TUTORIAL</h1>
    <h2 className="tutorial-subtitle">Siga o passo a passo:</h2>
    <div className="tutorial-cards-list">
      {steps.map(step => (
        <TutorialCard key={step.id} step={step} />
      ))}
    </div>
  </div>
);

export default TutorialContainer;
