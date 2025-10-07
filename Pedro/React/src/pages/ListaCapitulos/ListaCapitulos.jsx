// ListaCapitulos.js
import React, { useState, useEffect } from 'react';
import CapituloCard from '../../components/CapituloCard/CapituloCard'

// URL da sua API
const API_URL = "http://localhost:8080/capitulo";

const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '20px', 
  padding: '20px',
};


function ListaCapitulos() {
  const [capitulos, setCapitulos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    // Função assíncrona para buscar os dados da API
    const buscarCapitulos = async () => {
      try {
        const response = await fetch(API_URL);
        
        // Verifica se a resposta foi bem-sucedida (status 200)
        if (!response.ok) {
          throw new Error(`Erro de rede: ${response.statusText} (${response.status})`);
        }
        
        const data = await response.json();
        
        // 1. Opcional, mas recomendado: Ordena os capítulos pela 'ordem'
        const capitulosOrdenados = data.sort((a, b) => a.ordem - b.ordem);
        
        // 2. Armazena os dados no estado
        setCapitulos(capitulosOrdenados);
      } catch (e) {
        console.error("Falha ao buscar capítulos:", e);
        setErro("Não foi possível carregar os capítulos. Tente novamente mais tarde.");
      } finally {
        // Garante que o estado de carregamento seja desativado, independente do resultado
        setCarregando(false);
      }
    };

    buscarCapitulos();
  }, []); // O array de dependências vazio garante que a busca só ocorra uma vez ao montar o componente

  // ---------------------------------
  // Lógica de Renderização Condicional
  // ---------------------------------
  
  if (carregando) {
    return <div>Carregando capítulos...</div>;
  }
  
  if (erro) {
    return <div style={{ color: 'red', textAlign: 'center' }}>Erro: {erro}</div>;
  }
  
  if (capitulos.length === 0) {
    return <div>Nenhum capítulo encontrado.</div>;
  }

  // ---------------------------------
  // Renderização da Lista
  // ---------------------------------

  return (
    <div>
      <h2>Lista de Capítulos da História</h2>
      <div style={containerStyle}>
        {/* Usando map para renderizar o componente padrão para cada item */}
        {capitulos.map((capitulo) => (
          <CapituloCard
            // A key é o id único do banco, essencial para o React
            key={capitulo.idCapitulo} 
            // Passa todos os campos necessários como props
            idCapitulo={capitulo.idCapitulo}
            nomeCapitulo={capitulo.nomeCapitulo}
            personagemSafe={capitulo.personagemSafe}
            ordem={capitulo.ordem}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaCapitulos;