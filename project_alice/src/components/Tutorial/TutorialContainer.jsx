import React from 'react';
import TutorialCard from './TutorialCard';

const TutorialContainer = ({ steps, questionMarks }) => (
  <div className="tutorialContainer">
    
    {/* Imagem decorativa canto superior direito */}
    {questionMarks?.top && (
      <img
        src={questionMarks.top}
        alt="Decoração interrogação superior"
        className="questionMark questionMarkTop"
      />
    )}

    {/* Imagem decorativa canto inferior esquerdo */}
    {questionMarks?.bottom && (
      <img
        src={questionMarks.bottom}
        alt="Decoração interrogação inferior"
        className="questionMark questionMarkBottom"
      />
    )}

    <h1 className="tutorialTitle">Tutorial</h1>
    <h2 className="tutorialSubtitle">Siga o passo a passo:</h2>

    <div className="tutorialCardsList">
      {steps.map(step => (
        <TutorialCard key={step.id} step={step} />
      ))}
    </div>
  </div>
);

export default TutorialContainer;
