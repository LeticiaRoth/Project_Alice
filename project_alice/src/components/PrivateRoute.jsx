import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';

/**
 * Componente que protege rotas. Redireciona para /login se o usuário não estiver autenticado.
 */
function PrivateRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();

  // 1. Enquanto o contexto checa a sessão inicial (via token)
  if (loading) {
    return <div style={{padding: '20px'}}>Carregando sessão...</div>;
  }
  
  // 2. Se não estiver autenticado, manda para a tela de login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // 3. Se estiver autenticado, renderiza o componente da rota
  return children;
}

export default PrivateRoute;