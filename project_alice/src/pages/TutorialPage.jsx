import React from 'react';
import TutorialContainer from '../components/Tutorial/TutorialContainer.jsx';
import '../styles/TutorialPage.css';

// imagens dos números dos cards
import Number1 from '../assets/Imagens/TutorialPage/StepOne.svg';
import Number2 from '../assets/Imagens/TutorialPage/StepTwo.svg';
import Number3 from '../assets/Imagens/TutorialPage/StepThree.svg';
import Number4 from '../assets/Imagens/TutorialPage/StepFour.svg';

// imagens dos pontos de Interrogação
import QuestionMarkTop from '../assets/Imagens/TutorialPage/SinalInterrogacaoTop.svg';
import QuestionMarkBottom from '../assets/Imagens/TutorialPage/SinalInterrogacaoBottom.svg';

// imagens dos botões
import ImageButtonComeçar from '../assets/Imagens/TutorialPage/ImageButtonComecar.svg';
import ImageButtonEntrar from "../assets/Imagens/TutorialPage/ImageButtonEntrar.svg";
import ImageCapitulo from "../assets/Imagens/TutorialPage/ImageCapitulo.svg";
import ImageFiltros from "../assets/Imagens/TutorialPage/ImageFiltros.svg";

const tutorialSteps = [
  {
    id: 1,
    image: Number1,
    heading: "Clique no botão de começar",
    text: "Clique no botão de começar localizado na página inicial. Ele irá levar você para o começo da sua aventura: a página de Login",
    buttonImage: ImageButtonComeçar,
    isRightAligned: false,
    headingColor: '#B2337B',
    shadowColor: 'rgba(254, 123, 175, 0.6)'
  },
  {
    id: 2,
    image: Number2,
    heading: "Realize o cadastro ou login",
    text: "Coloque SEU NOME E UMA SENHA, depois clique no botão de Entrar. Assim você entrará na página de capítulos.",
    buttonImage: ImageButtonEntrar,
    isRightAligned: true,
    headingColor: '#25759F',
    shadowColor: 'rgba(34, 134, 192, 0.6)'
  },
  {
    id: 3,
    image: Number3,
    heading: "Escolha o capítulo de leitura",
    text: "Na página de capítulos tem os 10 capítulos do livro da Alice no País das Maravilhas. Leia até o final para receber a surpresa, aprimore sua leitura e aproveite a aventura!",
    buttonImage: ImageCapitulo,
    isRightAligned: false,
    headingColor: '#CF745C',
    shadowColor: 'rgba(248, 139, 83, 0.6)'
  },
  {
    id: 4,
    image: Number4,
    heading: "Interaja com os campos e faça o QUIZ",
    text: "Pesquise as palavras no campo de: DIGITE A PALAVRA e procure palavras com uma quantidade de letras no campo: DIGITE A QUANTIDADE. No final de cada capítulo, realize o QUIZ e ganhe um SELO de surpresa.",
    buttonImage: ImageFiltros,
    isRightAligned: true,
    headingColor: '#901B8E',
    shadowColor: 'rgba(144, 27, 142, 0.6)'
  }
];

const TutorialPage = () => (
  <div className="tutorialBackground">
  {/* Passando as imagens de interrogação como props */}
  <TutorialContainer
  steps={tutorialSteps}
  questionMarks={{ top: QuestionMarkTop, bottom: QuestionMarkBottom }}
  />
  
  {/* Blobs de fundo */}
  <div className="blob blob1"></div>
  <div className="blob blob2"></div>
  <div className="blob blob3"></div>
  <div className="blob blob4"></div>
  <div className="blob blob5"></div>
  </div>
);

export default TutorialPage;
