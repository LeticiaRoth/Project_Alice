import React, { useState } from "react";
import axios from 'axios';

// Componentes Customizados (assumindo que os caminhos estão corretos)
import InputField from "../components/Login-Cadastro/InputField";
import ArrowButton from '../components/Login-Cadastro/ArrowButton';
import ContainerForm from "../components/Login-Cadastro/ContainerForm"; // AGORA FUNCIONA COMO <form>

// Imagens (assumindo que os caminhos estão corretos)
import CoroaRainha from "../assets/Imagens/Cadastro/CoroaRainha.svg";
import Vallete from "../assets/Imagens/Cadastro/Valette.svg";
import CheapCartTop from "../assets/Imagens/Cadastro/CheapTop.svg";
import CheapCartBottom from "../assets/Imagens/Cadastro/CheapBottom.svg";

// Estilos (assumindo que o caminho está correto)
import "../styles/Cadastro.css";

const API_BASE_URL = "http://localhost:8090/user"; // URL da sua API

export default function Cadastro() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); // 👈 ESSENCIAL: Impede a recarga da página
        setMessage('');
        setIsSuccess(false);
        setLoading(true);

        const userData = {
            nomeUsuario: name,
            emailUsuario: email,
            senhaUsuario: password,
        };

        // 🚨 Opcional: Log para verificar os dados antes de enviar
        // console.log("Enviando dados:", userData); 

        try {
            const response = await axios.post(API_BASE_URL, userData);
            
            console.log("Novo usuário criado com ID:", response.data.idUsuario); 

            setMessage('Cadastro realizado com sucesso! Você pode fazer login agora.');
            setIsSuccess(true);
            setName('');
            setEmail('');
            setPassword('');
            
        } catch (err) {
            // Trata erros (como 409 Conflict ou 400 Bad Request do Spring Boot)
            const errorMessage = err.response?.data || 'Erro desconhecido ao cadastrar. Verifique a conexão.';
            setMessage(errorMessage);
            setIsSuccess(false);
            
        } finally {
            setLoading(false);
        }
    };


    return (
        // Classe CSS para o fundo da página
        <div className="cadastroBackground">
            {/* O ContainerForm agora é uma tag <form> que aciona handleSubmit */}
            <ContainerForm handleSubmit={handleSubmit}>
                
                {/* Ícones de Estilo */}
                <img src={CoroaRainha} alt="Coroa" className="iconsContainer coroaRainha" />
                <img src={CheapCartTop} alt="Carta" className="iconsContainer cheapCartaTop" />
                <img src={Vallete} alt="Lança" className="iconsContainer valleteCopas" />
                <img src={CheapCartBottom} alt="Carta" className="iconsContainer cheapCartaBottom" />

                <h2 className="cadastroTitle">Cadastro</h2>

                {/* Campo Nome */}
                <InputField 
                    label="Seu nome:" 
                    type="text" 
                    placeholder="Exemplo: Miguel"
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />

                {/* Campo Email */}
                <InputField 
                    label="Email:" 
                    type="email"
                    placeholder="Exemplo: miguel@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                {/* Campo Senha */}
                <InputField 
                    label="Crie uma senha:" 
                    type="password"
                    placeholder="Exemplo: 123miguel"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                />

                {/* Botão de Submissão */}
                <ArrowButton
                    text={loading ? "CADASTRANDO..." : "CADASTRAR"}
                    loading={loading}
                    type="submit" // 👈 É ESSENCIAL
                />

                {/* Mensagem de Feedback */}
                {message && (
                    <p style={{ 
                        color: isSuccess ? 'green' : 'red', 
                        marginTop: '20px',
                        fontWeight: 'bold' // Adicionei um pouco de estilo para o feedback
                    }}>
                        {message}
                    </p>
                )}

            </ContainerForm>
        </div>
    );
}