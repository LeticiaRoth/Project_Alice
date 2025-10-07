import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx'; 
import HTMLFlipBook from 'react-pageflip'; 

const API_URL = 'http://localhost:8090';

// Componente Auxiliar: Define o layout de cada página dentro do livro
const Page = React.forwardRef(({ children, pageNumber, chapterName }, ref) => {
    return (
        <div 
            className="page" 
            ref={ref} 
            data-density="hard" 
            style={{
                // Estilos para simular uma página de livro
                border: '1px solid #ddd', 
                padding: '25px',
                background: 'white', 
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
                overflowY: 'auto',
                lineHeight: '1.6'
            }}
        >
            <h3 style={{textAlign: 'center', margin: '0 0 15px 0', fontSize: '1.1em'}}>{chapterName}</h3>
            {children}
            {/* Número da página no canto */}
            <div style={{ position: 'absolute', bottom: '10px', right: '20px', fontSize: '10px' }}>
                Página {pageNumber}
            </div>
        </div>
    );
});


function ChapterReaderPage() {
  const { idCapitulo } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth(); 
  
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1); 
  const [loading, setLoading] = useState(true);
  const [isConcluido, setIsConcluido] = useState(false);
  const [error, setError] = useState(null);
  
  const bookRef = useRef(null); 

  const totalPages = pages.length;
  const currentProgresso = totalPages > 0 ? (currentPage / totalPages) * 100 : 0;
  
  const handleConcluirCapitulo = useCallback(async () => {
    if (isConcluido || !token) return;

    try {
        await axios.patch(`${API_URL}/usercapitulo/concluir`, 
            { idCapitulo: parseInt(idCapitulo) },
            { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
        );
        setIsConcluido(true);
    } catch (err) {
        console.error("Falha ao registrar conclusão:", err);
    }
  }, [isConcluido, token, idCapitulo]);

  useEffect(() => {
    const fetchPages = async () => {
      if (!token) {
        setLoading(false);
        return;
      }
      try {
        const response = await axios.get(`${API_URL}/pagina/capitulo/${idCapitulo}`);
        const sortedPages = response.data.sort((a, b) => a.numeroPagina - b.numeroPagina);
        setPages(sortedPages);
      } catch (err) {
        setError("Não foi possível carregar o conteúdo do capítulo.");
      } finally {
        setLoading(false);
      }
    };
    fetchPages();
  }, [idCapitulo, token]);
  
  const onPageFlip = (e) => {
    const newPageIndex = e.data; 
    const newPageNumber = newPageIndex + 1;
    setCurrentPage(newPageNumber);

    if (newPageIndex === totalPages - 1) {
        handleConcluirCapitulo();
    }
  };
  
  const goToNextPage = () => {
    if (bookRef.current) {
        bookRef.current.pageFlip().flipNext();
    }
  };

  const goToPrevPage = () => {
    if (bookRef.current) {
        bookRef.current.pageFlip().flipPrev();
    }
  };

  // --- Renderização ---
  
  if (loading) return <div style={{padding: '20px'}}>Carregando conteúdo...</div>;
  if (error) return <div style={{padding: '20px', color: 'red'}}>Erro: {error}</div>;
  if (pages.length === 0) return <div style={{padding: '20px'}}>Nenhum conteúdo encontrado para este capítulo.</div>;
  
  const capituloNome = pages[0]?.capitulo?.nomeCapitulo || 'Capítulo';
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>{capituloNome}</h1>

      {/* BARRA DE PROGRESSO */}
      <div style={{ margin: '20px auto 10px', height: '15px', maxWidth: '800px', backgroundColor: '#eee', borderRadius: '4px' }}>
        <div 
          style={{ 
            width: `${currentProgresso}%`, 
            height: '100%', 
            backgroundColor: isConcluido ? 'green' : '#007bff', 
            borderRadius: '4px',
            transition: 'width 0.3s'
          }}
        />
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.9em', maxWidth: '800px', margin: '0 auto 20px' }}>
          Página {currentPage} de {totalPages} ({currentProgresso.toFixed(0)}% lido)
      </p>

      {/* 🚨 Contêiner Centralizado para o Livro e Botões */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        
        {/* Botão Anterior */}
        <button 
            onClick={goToPrevPage} 
            disabled={isFirstPage}
            style={{ marginRight: '20px', fontSize: '2em', background: 'none', border: 'none', cursor: isFirstPage ? 'default' : 'pointer', opacity: isFirstPage ? 0.5 : 1, transition: 'opacity 0.2s' }}
        >
            &#x25C0;
        </button>

        <HTMLFlipBook 
          width={400} 
          height={550} 
          size="fixed"
          drawShadow={true}
          flippingTime={600}
          usePortrait={true}
          startPage={0}
          useMouseEvents={false}
          
          // 🚨 PROPRIEDADE CHAVE: Duas páginas lado a lado
          display="double" 

          style={{ margin: '0' }}
          onFlip={onPageFlip} 
          ref={bookRef}
        >
          {pages.map((pageData) => (
              <Page 
                  key={pageData.idPagina} 
                  pageNumber={pageData.numeroPagina}
                  chapterName={capituloNome}
              >
                  <p style={{whiteSpace: 'pre-wrap'}}>
                      {pageData.textoPagina.split('\n').map((line, lineIndex) => (
                          <React.Fragment key={lineIndex}>
                              {line}
                              <br />
                          </React.Fragment>
                      ))}
                  </p>
              </Page>
          ))}
        </HTMLFlipBook>
        
        {/* Botão Próximo */}
        <button 
            onClick={goToNextPage} 
            disabled={isLastPage}
            style={{ marginLeft: '20px', fontSize: '2em', background: 'none', border: 'none', cursor: isLastPage ? 'default' : 'pointer', opacity: isLastPage ? 0.5 : 1, transition: 'opacity 0.2s' }}
        >
            &#x25B6;
        </button>

      </div>
      
      {/* Mensagem de Conclusão */}
      {isConcluido && 
          <h3 style={{color: 'green', textAlign: 'center', marginTop: '20px'}}>
              Capítulo Concluído! O próximo está desbloqueado. 
              <button onClick={() => navigate('/capitulos')} style={{marginLeft: '20px', padding: '8px 15px', border: '1px solid green', background: '#e6ffe6', borderRadius: '4px', cursor: 'pointer'}}>Voltar para Capítulos</button>
          </h3>
      }
    </div>
  );
}

export default ChapterReaderPage;