import React from "react";
import { useNavigate } from "react-router-dom";
// 1. Importar o hook personalizado para acessar o Contexto
import { useAuth } from "../../context/AuthContext.jsx"; // Ajuste o caminho conforme sua estrutura de pastas

function HeroContent() {
    // 2. Usar o hook para obter o estado de autenticação
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    
    const handleStart = () => {
        // Lógica Condicional: Se está logado, vá para o conteúdo principal. Se não, vá para o login.
        if (isAuthenticated) {
            // Se logado: Redireciona para o conteúdo principal (ex: /book, /dashboard, /home)
            navigate("/paginaCapitulos"); 
        } else {
            // Se não logado: Redireciona para a página de login
            navigate("/login");
        }
    };

    return (
        <div className="heroContent">
        <h1>
        <span>Bem-vindo ao My Wordland!</span>
        <span>Explore esse mundo de</span>
        <span>palavras e magia.</span>
        </h1>
        
        <p>
        Aqui você pode ler a obra completa da{" "}
        <span className="highlight">Alice no País das Maravilhas</span>!
        </p>
        <p>Cuidado para não se perder na toca do coelho...</p>
        
        <button className="startButton" onClick={handleStart}>Começar</button>
        </div>
    );
}

export default HeroContent;