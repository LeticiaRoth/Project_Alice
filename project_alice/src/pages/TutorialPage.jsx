import React from 'react';
import StepCard from '../components/Tutorial/StepCard';

import img1 from '../assets/Imagens/TutorialPage/imgtest.svg';
import img2 from '../assets/Imagens/TutorialPage/imgtest.svg';
import img3 from '../assets/Imagens/TutorialPage/imgtest.svg';
import img4 from '../assets/Imagens/TutorialPage/imgtest.svg';

import '../styles/TutorialPage.css';

const steps = [
  {
    img: img1,
    title: 'Clique no botão de começar',
    description: 'Clique no botão de começar localizado na página inicial. Ele irá levar você para o começo da sua aventura: a página de Login.',
    button: { text: 'COMEÇAR >', className: 'start' },
  },
  {
    img: img2,
    title: 'Realize o cadastro ou login',
    description: 'Coloque SEU NOME e UMA SENHA, depois clique no botão de Entrar. Assim você entrará na página de capítulos.',
    button: { text: 'ENTRAR', className: 'enter' },
  },
  {
    img: img3,
    title: 'Escolha o capítulo de leitura',
    description: 'Na página de capítulos tem os capítulos do livro da Alice no País das Maravilhas. Leia até o final para receber a surpresa, aprimore sua leitura e aproveite a aventura!',
  },
  {
    img: img4,
    title: 'Interaja com os campos e faça o QUIZ',
    description: 'Pesquise as palavras no campo de DIGITE A PALAVRA e depois informe a quantidade de palavras no campo DIGITE A QUANTIDADE. No final de cada capítulo, realize o QUIZ e ganhe um SELO de superação.',
  },
];

const TutorialPage = () => {
  return (
    <div className="tutorial-container">
      <h1 className="tutorial-title">TUTORIAL</h1>
      <p className="tutorial-subtitle">Siga o passo a passo:</p>
      <div className="steps-grid">
        {steps.map((step, index) => (
          <StepCard key={index} {...step} />
        ))}
      </div>
    </div>
  );
};

export default TutorialPage;
