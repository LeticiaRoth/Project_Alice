import React from 'react';
import TutorialContainer from '../components/Tutorial/TutorialContainer.jsx';
import '../styles/TutorialPage.css';

// Importe suas imagens SVG
import Number1 from '../assets/Imagens/TutorialPage/StepOne.svg';
import Number2 from '../assets/Imagens/TutorialPage/StepTwo.svg';
import Number3 from '../assets/Imagens/TutorialPage/StepThree.svg';
import Number4 from '../assets/Imagens/TutorialPage/StepFour.svg';
import ButtonStart from '../assets/Imagens/TutorialPage/ImageButtonStart.svg'; // Imagem do botão COMEÇAR
import ButtonEnterArrow from '../assets/Imagens/TutorialPage/ImageButtonEntrar.svg'; // Imagem da seta do botão ENTRAR

// Imagens para os blobs (ajustadas para um ícone de interrogação)
// import QuestionBlob from '../assets/Imagens/TutorialPage/question-blob.svg';


const tutorialSteps = [
  {
    id: 1,
    image: Number1,
    heading: "Clique no botão de começar",
    text: "Clique no botão de começar localizado na página inicial. Ele irá levar você para o começo da sua aventura: a página de Login",
    buttonImage: ButtonStart, // Usado como imagem de botão
    isRightAligned: false,
    headingColor: '#E891BD', // Cor do passo 1
    shadowColor: 'rgba(232, 145, 189, 0.4)' // Sombra rosa mais suave
  },
  {
    id: 2,
    image: Number2,
    heading: "Realize o cadastro ou login",
    text: "Coloque SEU NOME E UMA SENHA, depois clique no botão de Entrar. Assim você entrará na página de capítulos.",
    buttonText: "ENTRAR", // Texto para o botão com seta
    buttonImage: ButtonEnterArrow, // Imagem da seta
    isRightAligned: true,
    headingColor: '#6FB4DB', // Cor do passo 2
    shadowColor: 'rgba(111, 180, 219, 0.4)' // Sombra azul mais suave
  },
  {
    id: 3,
    image: Number3,
    heading: "Escolha o capítulo de leitura",
    text: "Na página de capítulos tem os 10 capítulos do livro da Alice no País das Maravilhas. Leia até o final para receber a surpresa, aprimore sua leitura e aproveite a aventura!",
    isRightAligned: false,
    headingColor: '#E891BD', // Cor do passo 3
    shadowColor: 'rgba(232, 145, 189, 0.4)' // Sombra rosa mais suave
  },
  {
    id: 4,
    image: Number4,
    heading: "Interaja com os campos e faça o QUIZ",
    text: "Pesquise as palavras no campo de: DIGITE A PALAVRA e procure palavras com uma quantidade de letras no campo: DIGITE A QUANTIDADE. No final de cada capítulo, realize o QUIZ e ganhe um SELO de surpresa.",
    isRightAligned: true,
    headingColor: '#6FB4DB', // Cor do passo 4
    shadowColor: 'rgba(111, 180, 219, 0.4)' // Sombra azul mais suave
  }
];

const TutorialPage = () => (
  <div className="tutorial-background">
    <TutorialContainer steps={tutorialSteps} />

    {/* Blobs de fundo (ajustados para a imagem de interrogação) */}
    <div className="blob blob1" style={{ backgroundImage: `url(${QuestionBlob})` }}></div>
    <div className="blob blob2" style={{ backgroundImage: `url(${QuestionBlob})` }}></div>
    <div className="blob blob3" style={{ backgroundImage: `url(${QuestionBlob})` }}></div>
    <div className="blob blob4" style={{ backgroundImage: `url(${QuestionBlob})` }}></div>
    <div className="blob blob5" style={{ backgroundImage: `url(${QuestionBlob})` }}></div>
  </div>
);

export default TutorialPage;