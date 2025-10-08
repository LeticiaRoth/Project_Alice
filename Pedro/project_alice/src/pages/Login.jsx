import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import InputField from "../components/Login-Cadastro/InputField";
import ContainerForm from "../components/Login-Cadastro/ContainerForm";
import TextLink from "../components/Login-Cadastro/TextLink";
import ArrowButton from '../components/Login-Cadastro/ArrowButton';

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
  const [error, setError] = useState(null);
  const { login, isAuthenticated, loading } = useAuth();

  useEffect(() => {
    if (isAuthenticated) navigate('/');
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      await login(email, senha);
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Nome de usuário ou senha inválidos. Tente novamente.';
      setError(errorMessage);
    }
  };

  return (
    <div className="loginBackground">
      <ContainerForm handleSubmit={handleSubmit}>
        {/* Ícones decorativos */}
        <img src={ChapeuChapeleiro} alt="Chapéu" className="iconsContainer chapeuChapeleiro" />
        <img src={Relogio} alt="Relógio" className="iconsContainer relogio" />
        <img src={Chave} alt="Chave" className="iconsContainer chaves" />
        <img src={BuleCha} alt="Bule de Chá" className="iconsContainer buleCha" />

        <h2 className="loginTitle">LOGIN</h2>

        {error && <p className="errorMessage">{error}</p>}

        <InputField 
          label="Seu nome ou username:"  
          placeholder="Exemplo: MiguelMendes234"
          type="text" 
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

        <TextLink text="Sua primeira vez lendo o livro?" to="/cadastro" />

        <ArrowButton text={loading ? 'Entrando...' : 'Entrar'} loading={loading} />
      </ContainerForm>
    </div>
  );
}
