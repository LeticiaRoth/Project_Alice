import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext.jsx'; 
import BadgeCard from '../../components/BadgeCard/BadgeCard.jsx'; 

const API_URL = 'http://localhost:8090';

function BadgesPage() {
  const { isAuthenticated, token, loading: authLoading } = useAuth();
  
  const [allChapters, setAllChapters] = useState([]);
  const [userStatusMap, setUserStatusMap] = useState({});
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllData = async () => {
    if (!isAuthenticated || !token) {
        setLoading(false);
        return;
    }

    try {
      // 1. Faz a requisição de TODOS os capítulos (Lista Mestra)
      const chaptersResponse = await axios.get(`${API_URL}/capitulo`);
      const allChaptersList = chaptersResponse.data.sort((a, b) => a.ordem - b.ordem);
      setAllChapters(allChaptersList);

      // 2. Faz a requisição do STATUS do usuário logado
      const statusResponse = await axios.get(`${API_URL}/usercapitulo/me`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      // Converte o status em um mapa de acesso rápido: {idCapitulo: dados_de_status}
      const statusMap = statusResponse.data.reduce((acc, item) => {
          // Usamos o ID do capítulo para a chave, pois é único e está em ambas as listas
          acc[item.capitulo.idCapitulo] = item; 
          return acc;
      }, {});
      
      setUserStatusMap(statusMap);

    } catch (err) {
      console.error("Erro ao carregar dados:", err);
      setError("Não foi possível carregar o mural de selos.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchAllData();
    } else if (!authLoading) {
      setLoading(false);
    }
  }, [isAuthenticated, authLoading, token]); 

  // --- Renderização ---

  if (authLoading || loading) return <div style={{padding: '20px'}}>Carregando mural de selos...</div>;
  if (!isAuthenticated) return <div style={{padding: '20px'}}><p>Faça login para ver seus selos.</p></div>;
  if (error) return <div style={{padding: '20px', color: 'red'}}>Erro: {error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mural de Selos Conquistados</h2>
      <p>Conclua capítulos para desbloquear novos selos!</p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {allChapters.map((baseChapter) => {
          // 🚨 Combinação dos dados:
          const statusData = userStatusMap[baseChapter.idCapitulo]; 
          
          // O capítulo está concluído se houver status E o campo 'concluidoUsuarioCapitulo' for true
          const isCompleted = statusData ? statusData.concluidoUsuarioCapitulo : false;

          return (
            <BadgeCard
              key={baseChapter.idCapitulo}
              chapterName={baseChapter.nomeCapitulo}
              badgeImagePath={baseChapter.selo} // Pega o path do campo 'selo'
              isCompleted={isCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BadgesPage;