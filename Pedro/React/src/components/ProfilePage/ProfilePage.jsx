import React from 'react';
import { useAuth } from '../../context/AuthContext.jsx'; 

function ProfilePage() {
  const { user, loading, isAuthenticated, logout } = useAuth();

  if (loading) return <div>Checando sessão...</div>;
  
  if (!isAuthenticated) {
    return <div>Você não está logado.</div>;
  }

  return (
    <div style={{ border: '1px solid gray', padding: '15px' }}>
      <h3>Dados do Seu Perfil</h3>
      <p>ID: <strong>{user.idUsuario}</strong></p>
      <p>Nome: <strong>{user.nomeUsuario}</strong></p>
      <p>Email: <strong>{user.emailUsuario}</strong></p>
      <button onClick={logout} style={{ marginTop: '10px' }}>Sair</button>
    </div>
  );
}

export default ProfilePage;