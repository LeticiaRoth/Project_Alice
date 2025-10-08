import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';

// imagem chapeleiro
import ChapeleiroMaluco from '../assets/Imagens/CapituloPage/ImageChapeleiroMaluco.svg';

// importando CSS
import '../styles/CapituloPage.css';

// imagens dos botões
import NextPageImg from '../assets/Imagens/CapituloPage/ImageButtonRight.svg';
import PrevPageImg from '../assets/Imagens/CapituloPage/ImageButtonLeft.svg';

const API_URL = 'http://localhost:8090';

export default function CapituloPage() {
    const { idCapitulo } = useParams();
    const navigate = useNavigate();
    
    // --- ESTADOS DO COMPONENTE ---
    const [pages, setPages] = useState([]);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    // Estados da busca
    const [wordCount, setWordCount] = useState(0);
    const [wordSizeCount, setWordSizeCount] = useState(0); 
    const [searchTerm, setSearchTerm] = useState(''); 
    
    // Estados para controlar os valores dos inputs
    const [wordInput, setWordInput] = useState('');
    const [wordSizeInput, setWordSizeInput] = useState('');
    
    // --- DADOS DERIVADOS ---
    const totalPages = pages.length;
    const currentProgresso = totalPages > 0 ? ((currentPageIndex + 1) / totalPages) * 100 : 0;
    const currentPage = pages[currentPageIndex];
    const currentText = currentPage ? currentPage.textoPagina : '';
    
    // --- LÓGICA DE BUSCA ---
    
    // 1. Busca por palavra específica
    const handleWordSearch = (word) => {
        setWordInput(word);
        
        setWordSizeCount(0);
        setWordSizeInput('');
        setSearchTerm(word); 

        if (!word || !currentText) {
            setWordCount(0);
            return;
        }
        const regex = new RegExp(word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), "gi");
        const matches = currentText.match(regex);
        setWordCount(matches ? matches.length : 0);
    };
    
    // 2. Busca por quantidade de letras (tamanho da palavra)
    const handleWordSizeSearch = (sizeString) => {
        setWordSizeInput(sizeString); 

        setWordCount(0);
        setWordInput('');
        setSearchTerm(''); 

        const size = parseInt(sizeString.trim(), 10);
        
        // Validação
        if (isNaN(size) || size <= 0 || !currentText) {
            setWordSizeCount(0);
            return;
        }
        
        // NOVO AJUSTE CRÍTICO:
        // Padrão que considera APENAS LETRAS (a-z e A-Z), incluindo acentuadas (\p{L} em Unicode),
        // e exclui números/símbolos que \w incluiria.
        // O flag 'u' (unicode) é necessário para que \p{L} funcione corretamente no JavaScript.
        const letterRegexPattern = '[a-záéíóúàèìòùãõâêîôûäëïöüçA-ZÁÉÍÓÚÀÈÌÒÙÃÕÂÊÎÔÛÄËÏÖÜÇ]';
        
        // Regex para encontrar palavras com exatamente {size} caracteres de LETRA, 
        // delimitadas por fronteiras de palavra (\b)
        // Se a engine suportasse \p{L} com o flag 'u', seria `\\b\\p{L}{${size}}\\b`
        // Usaremos o padrão mais abrangente compatível:
        const sizeRegexString = `\\b${letterRegexPattern}{${size}}\\b`;
        
        // Define a regex string no termo de busca para o useMemo
        setSearchTerm(sizeRegexString);
        
        // Cria a regex para contagem
        // O flag 'u' (unicode) é essencial para o uso de caracteres acentuados.
        const countRegex = new RegExp(sizeRegexString, "giu"); 
        
        const matches = currentText.match(countRegex);
        setWordSizeCount(matches ? matches.length : 0);
    };
    
    // --- EFEITOS (LIFECYCLE) ---
    // Limpa a busca ao trocar de página
    useEffect(() => {
        setWordCount(0);
        setWordSizeCount(0);
        setSearchTerm(''); 
        setWordInput('');
        setWordSizeInput('');
        
        // Mantém a funcionalidade de re-executar se houver inputs preenchidos
        if (wordInput) handleWordSearch(wordInput);
        if (wordSizeInput) handleWordSizeSearch(wordSizeInput);

    }, [currentPageIndex]);

    // Busca os dados do capítulo na API
    useEffect(() => {
        const fetchPages = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`${API_URL}/pagina/capitulo/${idCapitulo}`);
                const sortedPages = response.data.sort((a, b) => a.numeroPagina - b.numeroPagina);
                setPages(sortedPages);
            } catch (err) {
                console.error("Erro ao carregar páginas:", err);
                setError(`Não foi possível carregar o conteúdo do capítulo ${idCapitulo}.`);
            } finally {
                setLoading(false);
            }
        };
        fetchPages();
    }, [idCapitulo]);
    
    // --- NAVEGAÇÃO ---
    const goToNextPage = () => {
        if (currentPageIndex < totalPages - 1) {
            setCurrentPageIndex(currentPageIndex + 1);
        } else {
            navigate(`/paginaQuiz/${idCapitulo}`);
        }
    };
    
    const goToPrevPage = () => {
        if (currentPageIndex > 0) {
            setCurrentPageIndex(currentPageIndex - 1);
        }
    };
    
    // --- MEMOIZAÇÃO DO TEXTO DESTACADO ---
    const highlightedText = useMemo(() => {
        if (!currentText) return null;
        
        const termToUse = wordInput || wordSizeInput ? searchTerm : '';

        if (!termToUse) {
            // Retorna o texto original com quebras de linha tratadas pelo 'pre-wrap'
            return currentText; 
        }
        
        let regex;
        
        // 1. Busca por Palavra Literal
        if (wordInput) {
            const escapedTerm = wordInput.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            regex = new RegExp(`(${escapedTerm})`, 'gi');
        } 
        // 2. Busca por Tamanho de Palavra (usando a regex string)
        else if (wordSizeInput) {
            // O flag 'u' (unicode) é necessário para garantir que o Regex de letras funcione
            regex = new RegExp(`(${searchTerm})`, 'giu');
        } else {
            return currentText;
        }

        // Lógica de destaque: divide o texto usando a regex.
        const parts = currentText.split(regex);
        
        return parts.map((part, index) => {
            // Se a parte do texto é o match (palavra ou tamanho), destaca.
            if (part && regex.test(part) && (wordInput || part.length === parseInt(wordSizeInput, 10))) {
                 return <span key={index} className="highlight">{part}</span>;
            }
            return part;
        });

    }, [currentText, wordInput, wordSizeInput, searchTerm]); 
 
// --- RENDERIZAÇÃO ---
if (loading) return <div className="statusMessage">Carregando conteúdo...</div>;
if (error) return <div className="statusMessage error">{error}</div>;
 
return (
    <div className="capituloContainer">
    <Navbar bgColor="bgGreen" />
   
    <div className="mainContent">
    <button className="backButton" onClick={() => navigate(-1)}>
    <div className="arrowShape"></div>
    <span>Voltar</span>
    </button>
   
    <div className="contentWrapper">
    {/* Coluna da Esquerda: Interação */}
    <div className="interactionArea">
    <img src={ChapeleiroMaluco} alt="Chapeleiro Maluco" className="characterImage" />
    <div className="interactionBox">
    <div className="headerText">
    <h2>INTERAJA COM O LIVRO</h2>
    <p>Pesquise as palavras e a quantidade de letras dentro do nosso capítulo. A palavra será grifada nas páginas.</p>
    </div>
    <div className="chapterTitleBox">
    <span>CAPÍTULO 1</span>
    <p>DENTRO DA TOCA DO COELHO</p>
    </div>
    <div className="searchForms">
    <div className="formGroup">
    <label htmlFor="word-search">Escreva uma palavra:</label>
    <div className="inputRow">
    <input type="text" id="word-search" placeholder="Exemplo: Alice" value={wordInput} onChange={(e) => handleWordSearch(e.target.value)} />
    <div className="resultBox">
    <label>Aparece:</label>
    <span>{wordCount} vezes</span>
    </div>
    </div>
    </div>
    {/* NOVO INPUT: Busca por tamanho de palavra */}
    <div className="formGroup">
    <label htmlFor="word-search">Quantidade de letras na palavra:</label>
    <div className="inputRow">
    <input 
        type="text"
        id="word-search"
        placeholder="Exemplo: 5" 
        value={wordSizeInput} 
        onChange={(e) => handleWordSizeSearch(e.target.value)} 
    />
    <div className="resultBox">
    <label>Aparece:</label>
    <span>{wordSizeCount} palavras</span>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    {/* Coluna da Direita: Leitura */}
    <div className="readingArea">
    <h1>{currentPage?.capitulo?.nomeCapitulo || "Carregando título..."}</h1>
   
    <div className="progressBarContainer">
    <div className="progressBarFill" style={{ width: `${currentProgresso}%` }} />
    </div>
    <p className="pageCounter">
    Página {currentPageIndex + 1} de {totalPages} ({currentProgresso.toFixed(0)}%)
    </p>
   
    <div className="textDisplayArea">
    {/* O style={{ whiteSpace: 'pre-wrap' }} garante que as quebras de linha funcionem */}
    <p style={{ whiteSpace: 'pre-wrap' }}>{highlightedText}</p> 
    </div>
   
    <div className="navigationButtons">
    <img
    src={PrevPageImg}
    alt="Página Anterior"
    className={`navImage ${currentPageIndex === 0 ? 'disabled' : ''}`}
    onClick={goToPrevPage}
    />
    <img
    src={NextPageImg}
    alt={currentPageIndex === totalPages - 1 ? "Ir para o quiz" : "Próxima Página"}
    className="navImage"
    onClick={goToNextPage}
    />
    </div>
   
   
    </div>
    </div>
    </div>
);
}