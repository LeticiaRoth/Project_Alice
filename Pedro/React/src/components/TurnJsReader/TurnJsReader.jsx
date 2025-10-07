import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx'; 
// 🚨 NOVO IMPORT: A biblioteca nativa do React
import HTMLFlipBook from 'react-pageflip'; 

const API_URL = 'http://localhost:8090';

// Componente auxiliar para o conteúdo da página
// O react-pageflip exige que cada página seja um componente separado
const Page = React.forwardRef(({ children, pageNumber }, ref) => {
    return (
        <div className="page" ref={ref} data-density="hard" style={{
            border: '1px solid #ddd', 
            padding: '20px', 
            background: '#fefefe', 
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            overflowY: 'auto'
        }}>
            {children}
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
  
  // 🚨 REFERÊNCIA: Para controlar o componente HTMLFlipBook
  const bookRef = useRef(null); 

  const totalPages = pages.length;
  const currentProgresso = totalPages > 0 ? (currentPage / totalPages) * 100 : 0;
  
  // ----------------------------------------------------
  // Lógica de Conclusão (Permanece a mesma)
  // ----------------------------------------------------
  const handleConcluirCapitulo = useCallback(async () => {
    if (isConcluido || !token) return;

    try {
        await axios.patch(`${API_URL}/usercapitulo/concluir`, 
            { idCapitulo: parseInt(idCapitulo) },
            { headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } }
        );
        setIsConcluido(true);
        console.log("Capítulo concluído via API.");
    } catch (err) {
        console.error("Erro ao concluir capítulo:", err);
        alert("Falha ao registrar conclusão. Tente novamente.");
    }
  }, [isConcluido, token, idCapitulo]);

  // ----------------------------------------------------
  // Lógica de Busca de Dados (Permanece a mesma)
  // ----------------------------------------------------
  useEffect(() => {
    // ... (seu fetchPages)
  }, [idCapitulo, token]);
  
  // ----------------------------------------------------
  // Lógica de Controle de Páginas (Chamada pelos eventos do FlipBook)
  // ----------------------------------------------------
  const onPage = (e) => {
    const newPage = e.data + 1; // react-pageflip usa índice 0
    setCurrentPage(newPage);

    // 🚨 ACIONA CONCLUSÃO: Se chegou à última página (índice totalPages - 1)
    if (e.data === totalPages - 1) {
        handleConcluirCapitulo();
    }
  };
  
  // ----------------------------------------------------
  // Funções de Navegação (Usam a ref exposta)
  // ----------------------------------------------------
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
  if (error) return <div style={{padding: '20px', color: 'red'}}>{error}</div>;
  if (pages.length === 0) return <div style={{padding: '20px'}}>Nenhum conteúdo encontrado.</div>;
  
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

      {/* 🚨 COMPONENTE HTMLFlipBook */}
      <HTMLFlipBook 
        width={400} 
        height={550} 
        minWidth={315} 
        maxWidth={1000} 
        minHeight={420} 
        maxHeight={1350} 
        size="fixed"
        drawShadow={true}
        flippingTime={600}
        usePortrait={true}
        startPage={0}
        style={{ margin: '0 auto' }}
        onFlip={onPage} // 🚨 Evento de virada de página
        ref={bookRef}
        className="demo-book"
      >
        {/* Mapeia o conteúdo JSON para as páginas */}
        {pages.map((pageData) => (
            <Page key={pageData.idPagina} pageNumber={pageData.numeroPagina}>
                <h3 style={{textAlign: 'center'}}>{capituloNome}</h3>
                <p style={{whiteSpace: 'pre-wrap', padding: '0 15px', lineHeight: '1.6'}}>
                    {/* Formata o texto, mantendo as quebras de linha */}
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
      
      {/* BOTÕES DE NAVEGAÇÃO */}
      <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '800px', margin: '20px auto' }}>
        <button onClick={goToPrevPage} disabled={isFirstPage}>
          Página Anterior
        </button>
        <button onClick={goToNextPage} disabled={isLastPage}>
          {isLastPage ? 'Concluído' : 'Próxima Página'}
        </button>
      </div>

      {isConcluido && 
          <h3 style={{color: 'green', textAlign: 'center', marginTop: '20px'}}>
              Capítulo Concluído! O próximo está desbloqueado. 
              <button onClick={() => navigate('/capitulos')} style={{marginLeft: '20px'}}>Voltar para Capítulos</button>
          </h3>
      }
    </div>
  );
}

export default ChapterReaderPage;