import React, { useState } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8090/user';

function RegisterForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        setIsSuccess(false);
        setLoading(true);

        // 1. Monta o objeto de dados a ser enviado
        const userData = {
            nomeUsuario: name,
            emailUsuario: email,
            senhaUsuario: password,
        };

        try {
            // 2. Envia a requisição POST para o Spring Boot
            const response = await axios.post(API_BASE_URL, userData);
            
            // Exemplo de uso: logar o ID do usuário retornado
            console.log("Novo usuário criado com ID:", response.data.idUsuario); 

            setMessage('Cadastro realizado com sucesso! Você pode fazer login agora.');
            setIsSuccess(true);
            setName('');
            setEmail('');
            setPassword('');
            
        } catch (err) {
            // 4. Trata erros (ex: Email já cadastrado - Status 409)
            const errorMessage = err.response?.data || 'Erro desconhecido ao cadastrar.';
            setMessage(errorMessage);
            setIsSuccess(false);
            
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px', padding: '15px', border: '1px dashed #ccc' }}>
            <h3>Cadastre-se</h3>
            
            {message && (
                <p style={{ color: isSuccess ? 'green' : 'red' }}>
                    {message}
                </p>
            )}

            <div>
                <label>Nome:</label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>

            <div>
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            
            <div>
                <label>Senha:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            
            <button type="submit" disabled={loading}>
                {loading ? 'Cadastrando...' : 'Criar Conta'}
            </button>
        </form>
    );
}

export default RegisterForm;