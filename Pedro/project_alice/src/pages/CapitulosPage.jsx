import React from "react";
import '../styles/CapitulosPage.css'
import CapituloCard from "../components/Capitulos/CapituloCard";

// Personagens
import Coelho from "../assets/Imagens/CapitulosPage/Personagem/ImageCoelho.svg";
import Macaneta from "../assets/Imagens/CapitulosPage/Personagem/ImageMacaneta.svg";
import Dodo from "../assets/Imagens/CapitulosPage/Personagem/ImageDodo.svg";
import Abillio from "../assets/Imagens/CapitulosPage/Personagem/ImageAbillio.svg";
import Lagarta from "../assets/Imagens/CapitulosPage/Personagem/ImageLagarta.svg";
import Duquesa from "../assets/Imagens/CapitulosPage/Personagem/ImageDuquesa.svg";
import ChapeleiroMaluco from "../assets/Imagens/CapitulosPage/Personagem/ImageChapeleiroMaluco.svg";
import RainhaCopas from "../assets/Imagens/CapitulosPage/Personagem/ImageRainha.svg";
import Jabuti from "../assets/Imagens/CapitulosPage/Personagem/ImageJabuti.svg";
import Grifo from "../assets/Imagens/CapitulosPage/Personagem/ImageGrifo.svg";
import Vallete from "../assets/Imagens/CapitulosPage/Personagem/ImageValete.svg";
import Alice from "../assets/Imagens/CapitulosPage/Personagem/ImageAlice.svg";

// Fundos
import BgMacaneta from "../assets/Imagens/CapitulosPage/BackgroundCard/BgMacaneta.svg";
import BgDodo from "../assets/Imagens/CapitulosPage/BackgroundCard/BgDodo.svg";

// Decorativos
import CupsRightTop from "../assets/Imagens/CapitulosPage/Decor/CupsTopRight.svg";
import CupsRight from "../assets/Imagens/CapitulosPage/Decor/CupsRight.svg";
// import CupsTop from "../assets//Imagens/CapitulosPage/Decor/CupsTop.svg";
import CupsLeft from "../assets/Imagens/CapitulosPage/Decor/CupsLeft.svg";
import CupsTopLeft from "../assets/Imagens/CapitulosPage/Decor/CupsTopLeft.svg";
// import CupsBottom from "../assets/Imagens/CapitulosPage/Decor/CupsBottom.svg";

// decorações dos cards
import RabbitHole from "../assets/Imagens/CapitulosPage/Decor/RabbitHole.svg";
import RabbitClock from "../assets/Imagens/CapitulosPage/Decor/RabbitClock.svg";
import Star from "../assets/Imagens/CapitulosPage/Decor/ImageStar.svg";
import Escada from "../assets/Imagens/CapitulosPage/Decor/ImageEscada.svg";
import InterrogacaoTop from "../assets/Imagens/CapitulosPage/Decor/ImageInterrogacaoTop.svg";
import InterrogacaoBottom from "../assets/Imagens/CapitulosPage/Decor/ImageInterrogacaoBottom.svg";
import Cheap from "../assets/Imagens/CapitulosPage/Decor/Cheap.svg";

import Colher from "../assets/Imagens/CapitulosPage/Decor/ImageColher.svg";
import Pimenta from "../assets/Imagens/CapitulosPage/Decor/ImagePimenta.svg";
import Xicara from "../assets/Imagens/CapitulosPage/Decor/ImageXicara.svg";
import Penas from "../assets/Imagens/CapitulosPage/Decor/ImagePenas.svg";
import Pocao from "../assets/Imagens//CapitulosPage/Decor/ImagePocao.svg";

import { useAuth } from '../context/AuthContext.jsx';
import { useState, useEffect } from "react"; 


const API_URL = 'http://localhost:8090';

const CapitulosPage = () => {
  
  const [loading, setLoading] = useState(true);
  
  const { user, isAuthenticated, token, loading: authLoading } = useAuth();
  
  const fetchAllData = async () => {
    if (!isAuthenticated || !token) {
      setLoading(false);
      return;
    }
    // Chamada 1: Lista Mestra de Capítulos
    const chaptersResponse = await axios.get(`${API_URL}/capitulo`);
    const allChaptersList = chaptersResponse.data.sort((a, b) => a.ordem - b.ordem);
    
    setAllChapters(allChaptersList);
    
    // Chamada 2: Status do Usuário (Usando o token e o endpoint /me)
    const statusResponse = await axios.get(`${API_URL}/usercapitulo/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
  }
  
  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    } else if (!authLoading) {
      setLoading(false);
    }
  }, [isAuthenticated, authLoading, token]);
  
  const chapters = [
    {
      number: 1,
      title: "NO BURACO DO COELHO",
      buttonText: "LER",
      route: 1,
      bgColor: "radial-gradient(circle, #FFFBF5 0%, #B08957 100%)",
      borderColor: "#6E5739",
      image: Coelho,
      imageStyle: { top: "-95px", left: "-60px", width: "145px", zIndex: 100},
      extraDecorations: [
        // {
        //   src: RabbitHole,
        //   style: { bottom: "10px", left: "45px", width: "125px"  },
        // },
        {
          src: RabbitClock,
          style: { bottom: "140px", left: "165px", width: "85px", zIndex: 0  },
        }
      ]
    },
    {
      number: 2,
      title: "O LAGO DE LÁGRIMAS",
      buttonText: "LER",
      route: 2,
      borderColor: "#101C5A",
      image: Macaneta,
      bgImage: BgMacaneta,
      imageStyle: { top: "-60px", left: "150px", width: "105px", zIndex: 100},
      extraDecorations: [
        {
          src: Star,
          style: { bottom: "-2px", left: "735px", width: "70px"  },
        },
      ]
    },
    {
      number: 3,
      title: "UMA CORRIDA MALUCA",
      buttonText: "LER",
      route: 3,
      borderColor: "#105716",
      image: Dodo,
      bgImage: BgDodo,
      imageStyle: { top: "-80px", left: "110px", width: "155px", zIndex: 100},
    },
    {
      number: 4,
      title: "BILL, O LAGARTIXA-BILL",
      buttonText: "LER",
      route: 4,
      bgColor: "radial-gradient(circle, #FFFBF5 0%, #9bc5a1ff 100%)",
      borderColor: "#234807",
      image: Abillio,
      imageStyle: { top: "-70px", left: "160px", width: "115px", zIndex: 100},
      extraDecorations: [
        {
          src: Escada,
          style: { bottom: "-45px", left: "-30px", width: "140px"  },
        }
      ]
    },
    {
      number: 5,
      title: "CONSELHOS DE UMA TATURANA",
      buttonText: "LER",
      route: 5,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #99D4F3 55%, #9a2298ff 100%)",
      borderColor: "#0288d1",
      image: Lagarta,
      imageStyle: { top: "-70px", left: "180px", width: "125px", zIndex: 100},
      extraDecorations: [
        {
          src: InterrogacaoTop,
          style: { bottom: "155px", left: "-20px", width: "100px"  },
        },
        {
          src: InterrogacaoBottom,
          style: { bottom: "2px", left: "180px", width: "100px"  },
        },  
      ]    
    },
    {
      number: 6,
      title: "PORCO E PIMENTA",
      buttonText: "LER",
      route: 6,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #FFC0F7 65%)",
      borderColor: "#7D1111",
      image: Duquesa,
      imageStyle: { top: "-70px", left: "120px", width: "195px", zIndex: 100},
      extraDecorations: [
        {
          src: Colher,
          style: { bottom: "-40px", left: "10px", width: "85px", transform: "rotate(-15deg)" },
        },
        {
          src: Pimenta,
          style: { top: "170px", left: "150px", width: "75px", transform: "rotate(20deg)" },
        },
      ],
      
    },
    {
      number: 7,
      title: "UM CHÁ DAS CINCO MUITO LOUCO",
      buttonText: "LER",
      route: 7,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #E27851 150%)",
      borderColor: "#EF5D28",
      image: ChapeleiroMaluco,
      imageStyle: { top: "-90px", left: "150px", width: "175px", zIndex: 100},
      extraDecorations: [
        {
          src: Xicara,
          style: { bottom: "160px", left: "-20px", width: "110px", transform: "rotate(-10deg)" },
        },
      ]
    },
    {
      number: 8,
      title: "O CROCÔQUÊ DA RAINHA",
      buttonText: "LER",
      route: 8,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #E27851 150%)",
      borderColor: "#6D0F0F",
      image: RainhaCopas,
      imageStyle: { top: "-90px", left: "170px", width: "175px", zIndex: 100},
      extraDecorations: [
        {
          src: Cheap,
          style: { bottom: "130px", left: "-30px", width: "180px", transform: "rotate(-10deg)" },
        },
      ]
    },
    {
      number: 9,
      title: "A HISTÓRIA DO JABUTI DE MENTIRA",
      buttonText: "LER",
      route: 9,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #EEC41F 150%)",
      borderColor: "#fbc02d",
      image: Jabuti,
      imageStyle: { top: "-60px", left: "140px", width: "175px", zIndex: 100},
    },
    {
      number: 10,
      title: "A QUADRILHA DAS LAGOSTAS",
      buttonText: "LER",
      route: 10,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #CD96E1 130%)",
      borderColor: "#591354",
      image: Grifo,
      imageStyle: { top: "-120px", left: "120px", width: "135px", zIndex: 100},
      extraDecorations: [
        {
          src: Penas,
          style: { bottom: "30px", left: "-40px", width: "50px"},
        },
      ]
    },
    {
      number: 11,
      title: "QUEM ROUBOU AS TORTAS?",
      buttonText: "LER",
      route: 11,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #B1A4B1 130%)",
      borderColor: "#000000",
      image: Vallete,
      imageStyle: { top: "-80px", left: "150px", width: "125px", zIndex: 100},
    },
    {
      number: 12,
      title: "AS EVIDÊNCIAS DE ALICE",
      buttonText: "LER",
      route: 12,
      bgColor: "radial-gradient(circle, #FFFBF5 11%, #99D4F3 120%)",
      borderColor: "#051E45",
      image: Alice,
      imageStyle: { top: "-70px", left: "-90px", width: "165px", zIndex: 100},
      extraDecorations: [
        {
          src: Pocao,
          style: { bottom: "140px", left: "160px", width: "95px", transform: "rotate(10deg)" },
        },
      ]
    },
  ];
  
  
  
  return (
    <div className="chaptersPage">
    <header className="chaptersHeader">
    <h2>CAPÍTULOS</h2>
    <p>Continue a história por aqui!!</p>
    </header>
    
    {/* Xícaras */}
    <img src={CupsRightTop} alt="Cups" className="cupDecoration cup1" />
    <img src={CupsRight} alt="Cups" className="cupDecoration cup2" />
    {/* <img src={CupsTop} alt="Cups" className="cupDecoration cup3" /> */}
    <img src={CupsLeft} alt="Cups" className="cupDecoration cup4" />
    <img src={CupsTopLeft} alt="Cups" className="cupDecoration cup5" />
    {/* <img src={CupsBottom} alt="Cups" className="cupDecoration cup6" /> */}

    <div className="chaptersGrid">
    {chapters.map((chapter, index) => (
      <CapituloCard key={index} {...chapter} />
    ))}
    </div>
    </div>
  );
};

export default CapitulosPage;
