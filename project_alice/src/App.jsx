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

export default function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/tutorial" element={<TutorialPage />} />
    <Route path="/paginaSelo" element={<SeloPage />} />
    <Route path="/paginaCapitulos" element={<CapitulosPage />}/>
    <Route path="/paginaQuiz" element={<QuizPage />}/>
    <Route path="/paginaSinopse" element={<SinopsePage />}/>
    <Route path="/paginaCapitulo" element={<CapituloPage />}/>

    {/* Login e Cadastro*/}
    <Route path="/login" element={<LoginPage />}/>
    <Route path="/cadastro" element={<CadastroPage />}/>
    </Routes>
  );
}
