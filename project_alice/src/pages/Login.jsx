// Login.jsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"; // Importado para redirecionamento após sucesso

import InputField from "../components/Login-Cadastro/InputField";
// Assumindo que ContainerForm é o elemento <form> e aceita a prop 'onSubmit'
import ContainerForm from "../components/Login-Cadastro/ContainerForm";
import TextLink from "../components/Login-Cadastro/TextLink";
import ArrowButton from '../components/Login-Cadastro/ArrowButton';

// Ícones
import ChapeuChapeleiro from "../assets/imagens/login/chapeuChapeleiro.svg";
import Relogio from "../assets/imagens/login/relogio.svg";
import Chave from "../assets/imagens/login/chave.svg";
import BuleCha from "../assets/imagens/login/buleCha.svg";

import { useAuth } from '../context/AuthContext.jsx';
import "../styles/Login.css";


export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState(null); // Agora inicializado como null

  // Acessando 'login', 'isAuthenticated' e 'loading' do AuthContext
  const { login, isAuthenticated, loading } = useAuth(); 

  useEffect(() => {
    if (isAuthenticated) {
      // ✅ A navegação é chamada dentro do useEffect
      navigate('/'); 
    }
  }, [isAuthenticated, navigate]); // Dependências: Roda quando o status de auth muda

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    console.log("LOGIN.JSX: Tentando login com", { email, senha });

    // Se o AuthContext já gerencia o 'loading', podemos confiar nele.
    // Se o 'loading' fosse local, nós o definiríamos aqui: setLoading(true);

    try {
      await login(email, senha);
      // Se o login for bem-sucedido, redireciona. 
      // O 'isAuthenticated' é atualizado no contexto, mas o useNavigate é imediato.
      
    } catch (err) {
      // Falha no login (ex: erro 401 do backend)
      // Ajuste o acesso à mensagem de erro de acordo com a sua API
      const errorMessage = err.response?.data?.message || 'Email ou senha inválidos. Tente novamente.';
      setError(errorMessage);
    } 
    // Se o 'loading' fosse local, nós o definiríamos aqui: finally { setLoading(false); }
  };

  // Se o usuário já estiver autenticado (ocorre se ele for para /login mas já tiver token)

  return (
    <div className="loginBackground">
      {/* ContainerForm recebe a função de submissão do formulário */}
      <ContainerForm handleSubmit={handleSubmit}>
        {/* Ícones decorativos */}
        <img src={ChapeuChapeleiro} alt="Hat" className="iconsContainer chapeuChapeleiro" />
        <img src={Relogio} alt="Clock" className="iconsContainer relogio" />
        <img src={Chave} alt="Key" className="iconsContainer chaves" />
        <img src={BuleCha} alt="Teapot" className="iconsContainer buleCha" />

        <h2 className="loginTitle">LOGIN</h2>

        {/* Exibe erro se existir */}
        {error && <p className="error-message" style={{ color: 'red', textAlign: 'center', marginBottom: '10px' }}>{error}</p>}

        <InputField 
          label="Seu email:"  
          placeholder="Exemplo: miguel@email.com"
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <InputField 
          label="Sua senha:" 
          placeholder="Exemplo: 123miguel" 
          type="password" 
          value={senha} 
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        <TextLink 
          text="Sua primeira vez lendo o livro?" 
          to="/cadastro" 
        />

        {/* Botão de Submissão: Passa o estado de 'loading' e o texto dinâmico */}
        <ArrowButton 
          text={loading ? 'Entrando...' : 'Entrar'} // Texto muda quando carrega
          loading={loading} // Desabilita o botão durante o loading
        />
        
      </ContainerForm>
    </div>
  );
}