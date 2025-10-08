import React from "react";
import '../styles/CapitulosPage.css'
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

// Fundos
import BgCoelho from "../assets/Imagens/CapitulosPage/BackgroundCard/BgCoelho.svg";
import BgMacaneta from "../assets/Imagens/CapitulosPage/BackgroundCard/BgMacaneta.svg";
import BgDodo from "../assets/Imagens/CapitulosPage/BackgroundCard/BgDodo.svg";

// Decorativos
import CupsRightTop from "../assets/Imagens/CapitulosPage/Decor/CupsTopRight.svg";
import CupsRight from "../assets/Imagens/CapitulosPage/Decor/CupsRight.svg";
// import CupsBottom from "../assets/Imagens/CapitulosPage/Decor/CupsBottom.svg";
import CupsLeft from "../assets/Imagens/CapitulosPage/Decor/CupsLeft.svg";
import CupsTopLeft from "../assets/Imagens/CapitulosPage/Decor/CupsTopLeft.svg";

// REMOVIDO: import { useAuth } from '../context/AuthContext.jsx'; // Não é mais necessário
import { useState, useEffect } from "react"; 
import axios from 'axios';


const API_URL = 'http://localhost:8090';

const CapitulosPage = () => {

    // Mantemos 'loading' se houver carregamento assíncrono, mas focamos no carregamento dos capítulos.
    const [loading, setLoading] = useState(true);
    // Novo estado para a lista de capítulos carregada da API
    const [allChapters, setAllChapters] = useState([]); 

    // REMOVIDO: const { user, isAuthenticated, token, loading: authLoading } = useAuth(); // Não é mais necessário

    const fetchAllData = async () => {
        try {
            // Chamada ÚNICA: Lista Mestra de Capítulos
            // A página não precisa mais do token ou de verificação de login.
            const chaptersResponse = await axios.get(`${API_URL}/capitulo`);
            const allChaptersList = chaptersResponse.data.sort((a, b) => a.ordem - b.ordem);
            
            setAllChapters(allChaptersList);

            // REMOVIDO: Chamada 2: Status do Usuário (Usando o token e o endpoint /me)
            // Se esta informação for necessária, a lógica de login deve ser restaurada.

        } catch (error) {
            console.error("Erro ao carregar capítulos:", error);
            // Poderia adicionar um estado de erro aqui se necessário
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Chamamos a função de buscar dados diretamente, sem checar `isAuthenticated`
        fetchAllData();
    }, []); // O array de dependências agora está vazio para rodar apenas uma vez na montagem.

    // A lista de `chapters` hardcoded será mantida por enquanto, mas o ideal seria usar `allChapters`
    // para renderizar os dados vindos da API.

    // AVISO: Se a intenção era usar os dados da API (allChapters), você deve renderizá-los.
    // O código original usava a lista `chapters` hardcoded.
    // Para renderizar os dados da API, substitua `chapters` por `allChapters` na renderização.
    // Por enquanto, vou manter a lista `chapters` hardcoded para a página continuar funcionando
    // sem as imagens/detalhes que podem não estar na API.
    const chapters = [
        {
            number: 1,
            title: "NO BURACO DO COELHO",
            buttonText: "LER",
            route: "/capitulo1",
            bgColor: "#fff8f0",
            borderColor: "#d8a97c",
            image: Coelho,
            bgImage: BgCoelho,
        },
        // ... (o restante da sua lista chapters hardcoded) ...
        {
            number: 2,
            title: "O LAGO DE LÁGRIMAS",
            buttonText: "LER",
            route: "/capitulo2",
            bgColor: "#e3f2fd",
            borderColor: "#2196f3",
            image: Macaneta,
            bgImage: BgMacaneta,
        },
        {
            number: 3,
            title: "UMA CORRIDA MALUCA ",
            subtitle: "UMA HISTÓRIA COLORIDA",
            buttonText: "LER",
            route: "/capitulo3",
            bgColor: "#fde2f2",
            borderColor: "#e91e63",
            image: Dodo,
            bgImage: BgDodo,
        },
        {
            number: 4,
            title: "BILL, O LAGARTIXA-BILL",
            buttonText: "LER",
            route: "/capitulo4",
            bgColor: "#e8f5e9",
            borderColor: "#43a047",
            image: Abillio,
        },
        {
            number: 5,
            title: "CONSELHOS DE UMA TATURANA",
            buttonText: "LER",
            route: "/capitulo5",
            bgColor: "#e1f5fe",
            borderColor: "#0288d1",
            image: Lagarta,
        },
        {
            number: 6,
            title: "PORCO E PIMENTA",
            buttonText: "LER",
            route: "/capitulo6",
            bgColor: "#ffebee",
            borderColor: "#c62828",
            image: Duquesa,
        },
        {
            number: 7,
            title: "UM CHÁ DAS CINCO MUITO LOUCO",
            buttonText: "LER",
            route: "/capitulo7",
            bgColor: "#f3e5f5",
            borderColor: "#8e24aa",
            image: ChapeleiroMaluco,
        },
        {
            number: 8,
            title: "O CROCÔQUÊ DA RAINHA",
            buttonText: "LER",
            route: "/capitulo8",
            bgColor: "#ffebee",
            borderColor: "#ad1457",
        },
        {
            number: 9,
            title: "A HISTÓRIA DO JUÍZ DE MENTIRA",
            buttonText: "LER",
            route: "/capitulo9",
            bgColor: "#fffde7",
            borderColor: "#fbc02d",
        },
        {
            number: 10,
            title: "A QUEDINHA DAS LAGOSTAS",
            bgColor: "#fbe9e7",
            borderColor: "#ef6c00",
        },
        {
            number: 11,
            title: "QUEM ROUBOU AS TORTAS?",
            bgColor: "#eceff1",
            borderColor: "#607d8b",
        },
        {
            number: 12,
            title: "AS EVIDÊNCIAS DE ALICE",
            buttonText: "LER",
            route: "/capitulo12",
            bgColor: "#e3f2fd",
            borderColor: "#1976d2",
            image: Alice,
        },
    ];
    
    return (
        <>
            <Navbar bgColor="bgGreen" />
            <div className="chaptersPage">
                <header className="chaptersHeader">
                    <h2>CAPÍTULOS</h2>
                    <p>Continue a história por aqui!!</p>
                </header>

                {/* Xícaras */}
                <img src={CupsRightTop} alt="Cups" className="cupDecoration cup1" />
                <img src={CupsRight} alt="Cups" className="cupDecoration cup2" />
                {/* <img src={CupsBottom} alt="Cups" className="cupDecoration cup3" /> */}
                <img src={CupsLeft} alt="Cups" className="cupDecoration cup4" />
                <img src={CupsTopLeft} alt="Cups" className="cupDecoration cup5" />

                {/* Outras decorações */}
                {/* <img src={Feather} alt="Feather" className="decor decorFeather1" />
                <img src={Feather} alt="Feather" className="decor decorFeather2" />
                <img src={Shoe} alt="Shoe" className="decor decorShoe" />
                <img src={Hat} alt="Hat" className="decor decorHat" />
                <img src={Question} alt="Question" className="decor decorQuestion1" />
                <img src={Question} alt="Question" className="decor decorQuestion2" /> */}

                <div className="chaptersGrid">
                    {/* Aqui renderizamos a lista hardcoded. Se você quiser usar a lista da API, 
                    substitua 'chapters' por 'allChapters' (e ajuste o CapituloCard para receber os dados da API, se for diferente) */}
                    {chapters.map((chapter, index) => (
                        <CapituloCard key={index} {...chapter} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CapitulosPage;