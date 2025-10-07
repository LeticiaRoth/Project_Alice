import React from 'react';
import TutorialCard from './TutorialCard';
import ButtonNavigateCap from '../ButtonNavigateCap';

const TutorialContainer = ({ steps, questionMarks }) => (
  <div className="tutorialContainer">
    
    {/* imagem de ponto de interrogação no canto superior direito */}
    {questionMarks?.top && (
      <img
        src={questionMarks.top}
        alt="Decoração interrogação superior"
        className="questionMark questionMarkTop"
      />
    )}

    <h1 className="tutorialTitle">Tutorial</h1>
    <h2 className="tutorialSubtitle">Siga o passo a passo:</h2>

    <div className="tutorialCardsList">
      {steps.map(step => (
        <TutorialCard key={step.id} step={step} />
      ))}
    </div>

    {/* botão que redireciona para a página Capítulos */}
    <div className="tutorialButtonWrapper">
      <ButtonNavigateCap to="/paginaCapitulos" label="Ver meus capítulos" />
    </div>

    {/* imagem de ponto de interrogação no canto inferior esquerdo */}
    {questionMarks?.bottom && (
      <img
        src={questionMarks.bottom}
        alt="Decoração interrogação inferior"
        className="questionMark questionMarkBottom"
      />
    )}
  </div>
);

export default TutorialContainer;
