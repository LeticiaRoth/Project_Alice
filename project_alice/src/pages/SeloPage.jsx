import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom"; 
// Acessamos apenas o token e o estado de autenticação do AuthContext
import { useAuth } from "../context/AuthContext"; 
import axios from 'axios';

import Header from "../components/PageSelo/HeaderContainer";
import BackgroundBlobs from "../components/PageSelo/BackgroundBlobs";
import SeloItem from "../components/PageSelo/SeloItem";

import "../styles/PageSelo.css";

// URL Base da sua API
const API_URL = 'http://localhost:8090'; 

// Imagens decorativas
import Decor1 from '../assets/Imagens/SeloPage/Decor1.svg';
import Decor2 from '../assets/Imagens/SeloPage/Decor5.svg';
import Decor3 from '../assets/Imagens/SeloPage/Decor3.svg';
import Decor4 from '../assets/Imagens/SeloPage/Decor4.svg';
import Decor5 from '../assets/Imagens/SeloPage/Decor2.svg';

const SeloPage = () => {
    // 1. Acessa token e autenticação do Contexto
    const { isAuthenticated, loading: authLoading, token } = useAuth();
    const navigate = useNavigate();

    // 2. Estados Locais para a Busca de Dados
    // Armazena a lista de associações UsuarioCapitulo
    const [userCapitulosStatus, setUserCapitulosStatus] = useState([]);
    const [pageLoading, setPageLoading] = useState(true); 

    // ---------------------------------------------
    // 3. Efeito para Busca de Dados (useEffect)
    // ---------------------------------------------
    useEffect(() => {
        // Se a autenticação ainda está carregando, espera.
        if (authLoading) return;

        // Se o usuário NÃO está autenticado (e terminou de carregar), redireciona.
        if (!isAuthenticated) {
            navigate("/login");
            return;
        }

        // Se está autenticado, busca os dados dos selos
        const fetchCapitulosStatus = async () => {
            setPageLoading(true);
            try {
                const response = await axios.get(`${API_URL}/usercapitulo/me`, {
                    headers: {
                        Authorization: `Bearer ${token}` 
                    }
                });
                setUserCapitulosStatus(response.data); 
            } catch (error) {
                console.error("Erro ao buscar status dos capítulos:", error);
                // Em caso de erro (token expirado, etc.), força um logout/redirecionamento
                navigate("/login");
            } finally {
                setPageLoading(false);
            }
        };

        if (isAuthenticated && token) {
            fetchCapitulosStatus();
        }
    }, [isAuthenticated, authLoading, token, navigate]); // Dependências do useEffect

    // ---------------------------------------------
    // 4. Lógica de Carregamento
    // ---------------------------------------------
    if (authLoading || pageLoading) {
        return <div className="loadingScreen">Carregando Selos...</div>; 
    }
    
    // ---------------------------------------------
    // 5. Montagem da Grade (Processamento dos Dados)
    // ---------------------------------------------
    const totalSlots = 12; // Número total de slots na sua grade
    
    // Processa a lista de status retornada pela API
    const selos = userCapitulosStatus.map(statusItem => {
        const estaConcluido = statusItem.concluidoUsuarioCapitulo === true;

        // Se concluído, retorna o objeto 'capitulo' que contém o caminho do selo.
        if (estaConcluido) {
            return statusItem.capitulo; 
        } else {
            // Se não concluído, retorna NULL para o SeloItem usar o selo vazio.
            return null; 
        }
    });

    // Se o /usercapitulo/me não retornar todos os 12 capítulos, preenche o restante com null.
    while (selos.length < totalSlots) {
        selos.push(null); 
    }

    return (
        <div className="readingPage">
            <BackgroundBlobs />
            
            <div className="readingContainer">
                <Header />
                <h2 className="title">SELOS DE LEITURA</h2>
                
                <div className="sealsGrid">
                    {/* Mapeia os 12 slots, seloData é o objeto do capítulo ou null */}
                    {selos.map((seloData, index) => (
                        <SeloItem key={index} seloData={seloData} /> 
                    ))}
                </div>
                
            </div>
            
            {/* Rabos decorativos */}
            <img src={Decor1} alt="Decoração" className="tail tail1" />
            <img src={Decor2} alt="Decoração" className="tail tail2" />
            <img src={Decor3} alt="Decoração" className="tail tail3" />
            <img src={Decor5} alt="Decoração" className="tail tail4" />
            <img src={Decor4} alt="Decoração" className="tail tail5" />
        </div>
    );
};

export default SeloPage;