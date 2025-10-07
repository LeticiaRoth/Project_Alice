import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// URL base da sua API Spring Boot
const API_URL = 'http://localhost:8090'; 
const AuthContext = createContext();

// ----------------------------------------------------
// 1. Provedor de Contexto (AuthProvider)
// ----------------------------------------------------
export const AuthProvider = ({ children }) => {
  // Inicializa o token lendo o localStorage (se existir)
  const [user, setUser] = useState(null); 
  const [token, setToken] = useState(localStorage.getItem('userToken') || null);
  const [loading, setLoading] = useState(true);

  // Função para buscar os dados do usuário a partir do token (Endpoint: /user/me)
  const loadUser = async (current_token) => {
    if (!current_token) {
      setUser(null);
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.get(`${API_URL}/user/me`, {
        headers: {
          Authorization: `Bearer ${current_token}` 
        }
      });
      setUser(response.data); // Armazena os dados
      setToken(current_token);
      localStorage.setItem('userToken', current_token);
    } catch (error) {
      console.error("Token inválido ou expirado. Forçando logout.", error);
      logout(); 
    } finally {
      setLoading(false);
    }
  };

  // Função de Login (Endpoint: /auth/login)
  const login = async (emailUsuario, senhaUsuario) => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/auth/login`, {
        emailUsuario,
        senhaUsuario
      });

      const newToken = response.data.token;
      // Após o sucesso do login, carrega os dados do usuário
      await loadUser(newToken);
      
    } catch (error) {
      setLoading(false);
      // Lança o erro para o componente de formulário
      throw error; 
    }
  };

  // Função de Logout
  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('userToken');
    setLoading(false);
  };

  // Efeito para carregar o usuário ao iniciar a aplicação (se o token estiver salvo)
  useEffect(() => {
    loadUser(token);
  }, []);

  return (
    <AuthContext.Provider value={{ 
        user, 
        token, 
        loading, 
        login, 
        logout, 
        isAuthenticated: !!user 
    }}>
      {children}
    </AuthContext.Provider>
  );
};

// ----------------------------------------------------
// 2. Hook Personalizado para Uso Fácil (useAuth)
// ----------------------------------------------------
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  return useContext(AuthContext);
};