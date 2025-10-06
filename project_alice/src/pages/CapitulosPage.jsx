  import React from "react";
  import "../styles/CapitulosPage.css";
  import CapituloCard from "../components/Capitulos/CapituloCard";
  import Navbar from "../components/Navbar";

  // Personagens
  import Coelho from "../assets/Imagens/CapitulosPage/Personagem/ImageCoelho.svg";
  import Macaneta from "../assets/Imagens/CapitulosPage/Personagem/ImageMacaneta.svg";
  import Dodo from "../assets/Imagens/CapitulosPage/Personagem/ImageDodo.svg";
  import Abillio from "../assets/Imagens/CapitulosPage/Personagem/ImageAbillio.svg";
  import Lagarta from "../assets/Imagens/CapitulosPage/Personagem/ImageLagarta.svg";
  import Duquesa from "../assets/Imagens/CapitulosPage/Personagem/ImageDuquesa.svg";
  import ChapeleiroMaluco from "../assets/Imagens/CapitulosPage/Personagem/ImageChapeleiroMaluco.svg";
  import Alice from "../assets/Imagens/CapitulosPage/Personagem/ImageAlice.svg";
  import RainhaVermelha from "../assets/Imagens/CapitulosPage/Personagem/ImageRainhaVermelha.svg";
  import Jabuti from "../assets/Imagens/CapitulosPage/Personagem/ImageJabuti.svg";
  import Griffo from "../assets/Imagens/CapitulosPage/Personagem/ImageGriffo.svg";
  import Vallete from "../assets/Imagens/CapitulosPage/Personagem/ImageVallete.svg";

  // Fundos dos cards
  import BgCapitulo1 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo1.svg';
  import BgCapitulo2 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo2.svg';
  import BgCapitulo3 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo3.svg';
  import BgCapitulo4 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo4.svg';
  import BgCapitulo5 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo5.svg';
  import BgCapitulo6 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo6.svg';
  import BgCapitulo7 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo7.svg';
  import BgCapitulo8 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo8.svg';
  import BgCapitulo9 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo9.svg';
  import BgCapitulo10 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo10.svg';
  import BgCapitulo11 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo11.svg';
  import BgCapitulo12 from '../assets/Imagens/CapitulosPage/BackgroundCard/BgCapitulo12.svg';

  const CapitulosPage = () => {
    const chapters = [
      { number: 1, title: "DENTRO DA TOCA DO COELHO", buttonText: "LER", image: Coelho, bgImage: BgCapitulo1 },
      { number: 2, title: "O LAGO DE LÁGRIMAS", buttonText: "LER", image: Macaneta, bgImage: BgCapitulo2 },
      { number: 3, title: "UMA CORRIDA MALUCA", subtitle: "E UMA HISTÓRIA CAUDALOSA", buttonText: "LER", image: Dodo, bgImage: BgCapitulo3},
      { number: 4, title: "BILL, A LARGATIXA-BALA", buttonText: "LER", image: Abillio, bgImage: BgCapitulo4 },
      { number: 5, title: "CONSELHOS DE UMA TATURANA", buttonText: "LER", image: Lagarta, bgImage: BgCapitulo5 },
      { number: 6, title: "PORCO E PIMENTA", buttonText: "LER", image: Duquesa, bgImage: BgCapitulo6 },
      { number: 7, title: "UM CHÁ DAS CINCO MUITO LOUCO", buttonText: "LER", image: ChapeleiroMaluco, bgImage: BgCapitulo7 },
      { number: 8, title: "O CROQUÊ DA RAINHA", buttonText: "LER", image: RainhaVermelha, bgImage: BgCapitulo8 },
      { number: 9, title: "A HISTÓRIA DO JABUTI DE MENTIRA", buttonText: "LER", image: Jabuti, bgImage: BgCapitulo9 },
      { number: 10, title: "A QUADRILHA DAS LAGOSTAS", buttonText: "LER", image: Griffo, bgImage: BgCapitulo10 },
      { number: 11, title: "QUEM ROUBOU AS TORTAS?", buttonText: "LER", image: Vallete, bgImage: BgCapitulo11 },
      { number: 12, title: "AS EVIDÊNCIAS DE ALICE", buttonText: "LER", image: Alice, bgImage: BgCapitulo12 },
    ];

    return (
      <>
        <Navbar bgColor="bgGreen" />
        <div className="chaptersPage">
          <header className="chaptersHeader">
            <h2 className="titleChaptersPage">CAPÍTULOS</h2>
            <p className="descriptionChaptersPage">Continue a história por aqui!!</p>
          </header>

          <div className="chaptersGrid">
            {chapters.map((chapter, index) => (
              <CapituloCard key={index} {...chapter} />
            ))}
          </div>
        </div>
      </>
    );
  };

  export default CapitulosPage;
