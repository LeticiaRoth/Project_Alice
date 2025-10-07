import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx'; 
import UserCapituloCard from '../../components/UserCapituloCard/UserCapituloCard.jsx';

const API_URL = 'http://localhost:8090';

function ListaUserCapitulo() {
  const { user, isAuthenticated, token, loading: authLoading } = useAuth();
  
  const [allChapters, setAllChapters] = useState([]);
  const [userStatusMap, setUserStatusMap] = useState({});
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false); // Para desabilitar botões durante o PATCH

  // 1. Função que carrega a Lista Mestra e o Status do Usuário
  const fetchAllData = async () => {
    if (!isAuthenticated || !token) {
        setLoading(false);
        return;
    }

    try {
      // Chamada 1: Lista Mestra de Capítulos
      const chaptersResponse = await axios.get(`${API_URL}/capitulo`);
      const allChaptersList = chaptersResponse.data.sort((a, b) => a.ordem - b.ordem);
      
      setAllChapters(allChaptersList);

      // Chamada 2: Status do Usuário (Usando o token e o endpoint /me)
      const statusResponse = await axios.get(`${API_URL}/usercapitulo/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      const statusMap = statusResponse.data.reduce((acc, item) => {
          acc[item.capitulo.ordem] = item;
          return acc;
      }, {});
      
      setUserStatusMap(statusMap);

    } catch (err) {
      console.error("Erro ao carregar dados dos capítulos:", err);
      setError("Não foi possível carregar as informações. Verifique a conexão.");
    } finally {
      setLoading(false);
    }
  };

  // 🚨 NOVA FUNÇÃO DE AÇÃO: Marcar capítulo como lido e recarregar status
  const handleChapterRead = async (capituloId) => {
    if (!token) return;
    
    setIsUpdating(true);
    try {
        // Chamada PATCH: Envia o ID do capítulo para ser marcado como concluído (100%)
        await axios.patch(`${API_URL}/usercapitulo/concluir`, 
            { idCapitulo: capituloId }, // Corpo da requisição com o ID
            { 
                headers: { 
                    Authorization: `Bearer ${token}`, 
                    'Content-Type': 'application/json' 
                } 
            }
        );
        
        alert("Capítulo concluído! Recarregando progresso...");
        
        // RECARREGA TODOS OS DADOS para que a lógica de desbloqueio seja reavaliada
        await fetchAllData(); 

    } catch (err) {
        console.error("Erro ao marcar capítulo como concluído:", err);
        alert("Falha ao atualizar progresso. Tente novamente.");
    } finally {
        setIsUpdating(false);
    }
  };


  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    } else if (!authLoading) {
      setLoading(false);
    }
  }, [isAuthenticated, authLoading, token]); 

  // --- Lógica de Desbloqueio ---

  if (authLoading || loading) return <div style={{padding: '20px'}}>Carregando experiência personalizada...</div>;
  if (!isAuthenticated) return <div style={{padding: '20px'}}><p>Por favor, faça login para ver seu progresso.</p></div>;
  if (error) return <div style={{padding: '20px', color: 'red'}}>Erro: {error}</div>;

  // Lógica para descobrir a ORDEM do último capítulo concluído
  let lastCompletedOrder = 0;
  Object.values(userStatusMap).forEach(status => {
      if (status.concluidoUsuarioCapitulo && status.capitulo.ordem > lastCompletedOrder) {
          lastCompletedOrder = status.capitulo.ordem;
      }
  });


  return (
    <div style={{ padding: '20px' }}>
      <h2>Seus Capítulos, {user.nomeUsuario}</h2>
      {isUpdating && <p style={{color: 'blue'}}>Atualizando progresso...</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', opacity: isUpdating ? 0.5 : 1 }}>
        {allChapters.map((baseChapter) => {
          const order = baseChapter.ordem;
          const statusData = userStatusMap[order]; 
          
          const isCompleted = statusData ? statusData.concluidoUsuarioCapitulo : false;

          // Regra de Desbloqueio: Ordem atual é igual ou menor que o último concluído + 1
          let isLocked = order > lastCompletedOrder + 1; 

          // Exceção: Capítulo 1 nunca é bloqueado
          if (order === 1) {
             isLocked = false;
          }

          const chapterDisplayData = statusData ? statusData : { capitulo: baseChapter };

          return (
            <UserCapituloCard
              key={baseChapter.idCapitulo}
              chapterData={chapterDisplayData}
              isLocked={isLocked}
              isCompleted={isCompleted}
              onRead={handleChapterRead} // 🚨 PASSA A FUNÇÃO DE AÇÃO
            />
          );
        })}
      </div>
    </div>
  );
}

export default ListaUserCapitulo;