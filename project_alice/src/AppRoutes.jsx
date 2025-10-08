import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import TutorialPage from './pages/TutorialPage';
import SeloPage from "../src/pages/SeloPage";
import CapitulosPage from "../src/pages/CapitulosPage";
import QuizPage from "../src/pages/QuizPage";
import SinopsePage from "../src/pages/SinopsePage";
import CapituloPage from '../src/pages/CapituloPage';

import LoginPage from "../src/pages/Login";
import CadastroPage from "../src/pages/Cadastro";
import { AuthProvider } from './context/AuthContext';
import { useAuth } from './context/AuthContext';

export default function AppRoutes() {
    // Agora o useAuth() está DENTRO de um componente que será envolvido pelo AuthProvider
    const { loading } = useAuth(); 

    // Bloqueia a renderização das rotas enquanto o estado de autenticação carrega
    if (loading) {
        return <p>Carregando autenticação...</p>; 
    }

    return (
        <AuthProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/tutorial" element={<TutorialPage />} />
                <Route path="/paginaSelo" element={<SeloPage />} />
                <Route path="/paginaCapitulos" element={<CapitulosPage />}/>
                <Route path="/paginaQuiz/:idCapitulo" element={<QuizPage />}/>
                <Route path="/paginaSinopse" element={<SinopsePage />}/>
                <Route path='/paginaCapitulos/:idCapitulo' element={<CapituloPage />}/>

                <Route path="/login" element={<LoginPage />}/>
                <Route path="/cadastro" element={<CadastroPage />}/>
            </Routes>
        </AuthProvider>
    );
}

// Obs: O componente deve estar visível para o App.jsx, 
// então se estiver no mesmo arquivo, pode ser apenas uma função interna ou exportada.