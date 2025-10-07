import React from 'react';
// Importa o Router e as ferramentas de navegação
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; 

import { AuthProvider } from './context/AuthContext.jsx';
import { useAuth } from './context/AuthContext.jsx'; 
import LoginForm from './components/Login/LoginForm.jsx';
import RegisterForm from './components/Register/RegisterForm.jsx';
import ListaUserCapitulo from './pages/ListaUserCapitulo/ListaUserCapitulo.jsx';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'; // Importa a proteção
import ProfilePage from './components/ProfilePage/ProfilePage.jsx'; // Componente opcional
import BadgesPage from './pages/BadgesPage/BadgesPage.jsx';
import ChapterReaderPage from './pages/Reader/ChapterReaderPage.jsx';

// --- Componentes Auxiliares ---

// Combina Login e Cadastro na mesma tela
const AuthScreen = () => (
    <div style={{ display: 'flex', gap: '40px', padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <LoginForm />
        <RegisterForm />
    </div>
);

// Cabeçalho de Navegação (Para mostrar links de acordo com o status)
const Header = () => {
    const { isAuthenticated, logout, user } = useAuth();
    
    return (
        <nav style={{ padding: '10px', background: '#f0f0f0', display: 'flex', justifyContent: 'space-between' }}>
            <div>
                <Link to="/" style={{ marginRight: '15px' }}>Início (Auth)</Link>
                {/* O link para a página de capítulos só aparece se o usuário estiver logado */}
                {isAuthenticated && (
                    <>
                        <Link to="/capitulos" style={{ marginRight: '15px' }}>Meus Capítulos</Link>
                        <Link to="/selos" style={{ marginRight: '15px' }}>Meus Selos</Link>
                    </> 
                )}
            </div>
            {isAuthenticated ? (
                <div>
                    Olá, **{user?.nomeUsuario || 'Usuário'}**!
                    <button onClick={logout} style={{ marginLeft: '10px' }}>Sair</button>
                </div>
            ) : (
                <Link to="/login">Fazer Login</Link>
            )}
        </nav>
    );
};


function App() {
  return (
    <Router>
        <AuthProvider>
            <Header /> 
            
            <Routes>
                {/* Rotas de Autenticação */}
                <Route path="/" element={<AuthScreen />} />
                <Route path="/login" element={<AuthScreen />} />

                {/* Rota Protegida 1: Lista de Capítulos */}
                <Route
                    path="/capitulos"
                    element={
                        <PrivateRoute>
                            <ListaUserCapitulo />
                        </PrivateRoute>
                    }
                />
                
                {/* 🚨 NOVA ROTA PROTEGIDA 2: Leitor de Capítulos */}
                <Route
                    path="/capitulos/:idCapitulo" // Rota dinâmica
                    element={
                        <PrivateRoute>
                            <ChapterReaderPage />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/selos"
                    element={
                        <PrivateRoute>
                            <BadgesPage />
                        </PrivateRoute>
                    }
                />

                <Route path="*" element={<h1>404 | Página não encontrada</h1>} />

            </Routes>
        </AuthProvider>
    </Router>
  );
}

export default App;