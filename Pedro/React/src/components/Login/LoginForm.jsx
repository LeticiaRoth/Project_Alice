import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext.jsx'; 

function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  // Pega o login, loading e status de autenticação do Context
  const { login, loading, isAuthenticated } = useAuth(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      await login(email, senha);
      // Sucesso: O contexto já atualizou o estado.
      
    } catch (err) {
      // Falha no login (401 do backend)
      setError(err.response?.data || 'Falha ao conectar. Verifique o servidor.');
    }
  };
  
  if (isAuthenticated) {
    return <p style={{color: 'green'}}>Usuário logado!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Acessar Conta</h2>
      
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      
      <div>
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      
      <button type="submit" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}

export default LoginForm;