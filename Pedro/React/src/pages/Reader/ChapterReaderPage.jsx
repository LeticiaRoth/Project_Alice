import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx'; 

const API_URL = 'http://localhost:8090';

function ChapterReaderPage() {
  const { idCapitulo } = useParams(); // Pega o ID da URL
  const navigate = useNavigate();
  const { token } = useAuth(); 
  
  const [pages, setPages] = useState([]);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isConcluido, setIsConcluido] = useState(false);
  const [error, setError] = useState(null);

  const totalPages = pages.length;
  const currentProgresso = totalPages > 0 ? ((currentPageIndex + 1) / totalPages) * 100 : 0;
  
  // ----------------------------------------------------
  // 1. Lógica de Busca de Dados
  // ----------------------------------------------------
  useEffect(() => {
    const fetchPages = async () => {
      if (!token) return;

      try {
        const response = await axios.get(`${API_URL}/pagina/capitulo/${idCapitulo}`);
        // Ordena as páginas para garantir a ordem correta
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

  // ----------------------------------------------------
  // 2. Lógica de Atualização de Progresso (Ao Concluir)
  // ----------------------------------------------------
  const handleConcluirCapitulo = async () => {
    if (isConcluido || !token) return; // Evita múltiplas chamadas

    try {
        await axios.patch(`${API_URL}/usercapitulo/concluir`, 
            { idCapitulo: parseInt(idCapitulo) }, // Envia o ID do capítulo
            { 
                headers: { 
                    Authorization: `Bearer ${token}`, 
                    'Content-Type': 'application/json' 
                } 
            }
        );
        setIsConcluido(true);
        alert("Capítulo concluído! Você desbloqueou o próximo.");
        
        // Redireciona de volta para a lista de capítulos
        navigate('/capitulos'); 
        
    } catch (err) {
        console.error("Erro ao concluir capítulo:", err);
        alert("Falha ao registrar conclusão. Tente novamente.");
    }
  };


  // ----------------------------------------------------
  // 3. Funções de Navegação de Páginas
  // ----------------------------------------------------
  const goToNextPage = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
    } else {
      // 🚨 CHAMAR LÓGICA DE CONCLUSÃO ao chegar ao final
      handleConcluirCapitulo();
    }
  };

  const goToPrevPage = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
    }
  };

  // --- Renderização ---
  
  if (loading) return <div style={{padding: '20px'}}>Carregando conteúdo...</div>;
  if (error) return <div style={{padding: '20px', color: 'red'}}>{error}</div>;
  if (pages.length === 0) return <div style={{padding: '20px'}}>Nenhum conteúdo encontrado para este capítulo.</div>;
  
  const currentPage = pages[currentPageIndex];
  
  // 🚨 TRATAMENTO DA QUEBRA DE LINHA (\n)
  // Divide o texto pelo \n e mapeia cada segmento para um <p> ou <br>
  const formattedText = currentPage.textoPagina.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>{currentPage.capitulo.nomeCapitulo}</h1>
      
      {/* Barra de Progresso */}
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

      {/* Área do Texto */}
      <div style={{ 
          border: '1px solid #ddd', 
          padding: '20px', 
          lineHeight: '1.6',
          whiteSpace: 'pre-wrap' // Mantém quebras de linha e espaços do \n
      }}>
          <p>{formattedText}</p>
      </div>

      {/* Controles de Navegação */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <button onClick={goToPrevPage} disabled={currentPageIndex === 0}>
          Página Anterior
        </button>
        <button onClick={goToNextPage}>
          {currentPageIndex === totalPages - 1 ? 'Finalizar Capítulo' : 'Próxima Página'}
        </button>
      </div>
      
      {isConcluido && <h3 style={{color: 'green', textAlign: 'center'}}>Capítulo Concluído!</h3>}
    </div>
  );
}

export default ChapterReaderPage;