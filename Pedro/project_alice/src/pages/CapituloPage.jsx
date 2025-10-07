import React, { useEffect, useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx'; 

const API_URL = 'http://localhost:8090';

function CapituloPage() {
  const { idCapitulo } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const { token } = useAuth(); 
  
  const [pages, setPages] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isConcluido, setIsConcluido] = useState(false);
  const [error, setError] = useState(null);

  // --- HOOKS DE ESTADO DA BUSCA (INTEGRAÇÃO) ---
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState(''); // Termo para destacar
  // ---------------------------------------------

  const totalPages = pages.length;
  const currentProgresso = totalPages > 0 ? ((currentPageIndex + 1) / totalPages) * 100 : 0;
  
  // Define a página atual e o texto
  const currentPage = pages[currentPageIndex];
  const currentText = currentPage ? currentPage.textoPagina : '';

  // ----------------------------------------------------
  // Lógica da Busca (INTEGRAÇÃO)
  // ----------------------------------------------------
  const handleWordSearch = (word) => {
    if (!word) {
      setWordCount(0);
      setSearchTerm('');
      return;
    }
    const regex = new RegExp(word, "gi");
    // Usa o texto da página atual (currentText)
    const matches = currentText.match(regex); 
    setWordCount(matches ? matches.length : 0);
    setSearchTerm(word); // Atualiza o termo para destaque
  };
 
  const handleLetterSearch = (letter) => {
    if (!letter || letter.length !== 1) { // Garante que é apenas uma letra
      setLetterCount(0);
      setSearchTerm('');
      return;
    }
    const regex = new RegExp(letter, "gi");
    // Usa o texto da página atual (currentText)
    const matches = currentText.match(regex); 
    setLetterCount(matches ? matches.length : 0);
    setSearchTerm(letter); // Atualiza o termo para destaque
  };

  // Quando a página muda, zerar os contadores de busca
  useEffect(() => {
    setWordCount(0);
    setLetterCount(0);
    setSearchTerm('');
  }, [currentPageIndex]);

  // ----------------------------------------------------
  // 1. Lógica de Busca de Dados (Mantida)
  // ----------------------------------------------------
  useEffect(() => {
    const fetchPages = async () => {
      if (!token) return;

      try {
        const response = await axios.get(`${API_URL}/pagina/capitulo/${idCapitulo}`);
        const sortedPages = response.data.sort((a, b) => a.numeroPagina - b.numeroPagina);
        setPages(sortedPages);
      } catch (err) {
        console.error("Erro ao carregar páginas:", err);
        setError("Não foi possível carregar o conteúdo do capítulo.");
      } finally {
        setLoading(false);
      }
    };

    fetchPages();
  }, [idCapitulo, token]);


  // const handleConcluirCapitulo = async () => {
  //   if (isConcluido || !token) return; 

  //   try {
  //       await axios.patch(`${API_URL}/usercapitulo/concluir`, 
  //           { idCapitulo: parseInt(idCapitulo) }, 
  //           { 
  //               headers: { 
  //                   Authorization: `Bearer ${token}`, 
  //                   'Content-Type': 'application/json' 
  //               } 
  //           }
  //       );
  //       setIsConcluido(true);
  //       alert("Capítulo concluído! Você desbloqueou o próximo.");
  //       navigate('/paginaCapitulos'); 
        
  //   } catch (err) {
  //       console.error("Erro ao concluir capítulo:", err);
  //       alert("Falha ao registrar conclusão. Tente novamente.");
  //   }
  // };


  // const goToNextPage = () => {
  //   if (currentPageIndex < totalPages - 1) {
  //     setCurrentPageIndex(currentPageIndex + 1);
  //   } else {
  //     handleConcluirCapitulo();
  //   }
  // };

  // const goToPrevPage = () => {
  //   if (currentPageIndex > 0) {
  //     setCurrentPageIndex(currentPageIndex - 1);
  //   }
  // };


  // 2. Lógica de Atualização de Progresso (Ao Concluir) (Mantida, mas não chamada mais diretamente aqui)
const handleConcluirCapitulo = async () => {
  // Esta função não será mais chamada aqui, mas sim na QuizPage.
  // Você pode mantê-la ou removê-la daqui se não for usada.
  // ... (código existente)
};


// 3. Funções de Navegação de Páginas (ALTERADO)
const goToNextPage = () => {
  if (currentPageIndex < totalPages - 1) {
    setCurrentPageIndex(currentPageIndex + 1);
  } else {
    // REDIRECIONA PARA A PÁGINA DO QUIZ ao invés de concluir
    navigate(`/paginaQuiz/${idCapitulo}`); // Assumindo que a rota será '/quiz/:idCapitulo'
  }
};

const goToPrevPage = () => {
  if (currentPageIndex > 0) {
    setCurrentPageIndex(currentPageIndex - 1);
  }
};


  const highlightedText = useMemo(() => {
    if (!currentText) return null;
    
    if (!searchTerm) {
      // Se não houver termo de busca, formata apenas as quebras de linha
      return currentText.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      ));
    }

    // Divide o texto usando o termo de busca (case-insensitive)
    const parts = currentText.split(new RegExp(`(${searchTerm})`, 'gi'));

    // Mapeia as partes para adicionar o destaque e tratar quebras de linha
    return parts.map((part, index) => {
      const isMatch = new RegExp(`^${searchTerm}$`, 'i').test(part);
      
      if (isMatch) {
        return (
          <span key={index} style={{ backgroundColor: 'yellow', fontWeight: 'bold' }}>
            {part}
          </span>
        );
      }
      
      // Trata as quebras de linha (\n) em partes que não são o termo de busca
      return part.split('\n').map((line, lineIndex) => (
        <React.Fragment key={`${index}-${lineIndex}`}>
          {line}
          {lineIndex < part.split('\n').length - 1 && <br />}
        </React.Fragment>
      ));
      
    }).flat(); // Usa .flat() para nivelar o array de Fragments aninhados
  }, [currentText, searchTerm]);


  // --- Renderização ---
  
  if (loading) return <div style={{padding: '20px'}}>Carregando conteúdo...</div>;
  if (error) return <div style={{padding: '20px', color: 'red'}}>{error}</div>;
  if (pages.length === 0) return <div style={{padding: '20px'}}>Nenhum conteúdo encontrado para este capítulo.</div>;
  
  
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{currentPage.capitulo.nomeCapitulo}</h1>
      
      {/* --- ÁREA DE BUSCA (INTEGRAÇÃO) --- */}
      <div style={{ border: '1px solid #007bff', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h4>INTERAJA COM O TEXTO ATUAL</h4>
        <p>Pesquise palavras ou letras para destacá-las na página e ver a contagem.</p>
        
        {/* Formulário de Busca Simplificado */}
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <input 
            type="text" 
            placeholder="Digite palavra para buscar" 
            onChange={(e) => handleWordSearch(e.target.value)}
            style={{ padding: '8px', flexGrow: 1 }}
          />
          <input 
            type="text" 
            maxLength={1}
            placeholder="Digite letra para buscar" 
            onChange={(e) => handleLetterSearch(e.target.value)}
            style={{ padding: '8px', width: '150px' }}
          />
        </div>
        
        <div style={{ marginTop: '10px', fontSize: '0.9em' }}>
          {searchTerm && `Resultados para "${searchTerm}": `}
          {wordCount > 0 && `Palavra: ${wordCount} vezes. `}
          {letterCount > 0 && `Letra: ${letterCount} vezes. `}
          {searchTerm && wordCount === 0 && letterCount === 0 && 'Nenhuma ocorrência encontrada.'}
        </div>
      </div>
      {/* ---------------------------------------- */}


      {/* Barra de Progresso (Mantida) */}
      <div style={{ margin: '20px 0', height: '20px', backgroundColor: '#eee', borderRadius: '4px' }}>
        <div 
          style={{ 
            width: `${currentProgresso}%`, 
            height: '100%', 
            backgroundColor: currentProgresso === 100 ? 'green' : '#007bff', 
            borderRadius: '4px',
            transition: 'width 0.3s'
          }}
        />
      </div>
      <p style={{ textAlign: 'right', fontSize: '0.9em' }}>
          Página {currentPageIndex + 1} de {totalPages} ({currentProgresso.toFixed(0)}%)
      </p>

      {/* Área do Texto (USANDO highlightedText) */}
      <div style={{ 
          border: '1px solid #ddd', 
          padding: '20px', 
          lineHeight: '1.6',
          minHeight: '300px' // Apenas para visualização
      }}>
          <p>{highlightedText}</p>
      </div>

      {/* Controles de Navegação (Mantida) */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={goToPrevPage} disabled={currentPageIndex === 0}>
          Página Anterior
        </button>
        <button onClick={goToNextPage}>
          {currentPageIndex === totalPages - 1 ? 'Ir para o quiz' : 'Próxima Página'}
        </button>
      </div>
      
      {isConcluido && <h3 style={{color: 'green', textAlign: 'center'}}>Capítulo Concluído!</h3>}
    </div>
  );
}

export default CapituloPage;