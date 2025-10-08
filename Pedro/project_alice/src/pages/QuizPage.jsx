import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'; // Novo
import axios from 'axios'; // Novo
import { useAuth } from '../context/AuthContext.jsx'; // Novo
import Navbar from '../components/Navbar';
import QuestionCard from "../components/QuizPage/QuestionCard";
import ModalCongratulations from '../components/QuizPage/ModalCongratulations'; // Descomentado para uso
import rabbitImg from '../assets/Imagens/QuizPage/WhiteRabbit.svg'; // Descomentado
import clockImg from '../assets/Imagens/QuizPage/Clock.svg'; // Descomentado
//import rightButton from '../assets/Imagens/QuizPage/ImageButtonAvancar.svg';
import '../styles/QuizPage.css';

const API_URL = 'http://localhost:8090'; // Novo: Para a API

// Definição de tipo para as perguntas após a formatação
// const questions = [ ... ]; // Removidas as perguntas estáticas

export default function QuizPage() {
  const { idCapitulo } = useParams(); // Novo: Pega o ID do capítulo da URL
  const navigate = useNavigate(); // Novo
  const { token, isAuthenticated, loading: authLoading } = useAuth(); // Novo: Para autenticação
    
  const [questions, setQuestions] = useState([]); // Novo: Estado para as perguntas da API
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true); // Novo: Estado de carregamento
  const [score, setScore] = useState(0); // Novo: Contador de respostas corretas

  // --- BUSCA DAS PERGUNTAS NA API ---
  useEffect(() => {
    if (!isAuthenticated) {
            navigate("/login");
            return;
    }
    const fetchQuizQuestions = async () => {
      if (!token || !idCapitulo) {
          console.log(`Token ou ID do Capítulo faltando. Parando a busca. ${idCapitulo}, ${token}`);
          setLoading(false); // Sai do estado de carregamento mesmo sem dados
          return;
      }

      try {
        const response = await axios.get(`${API_URL}/pergunta/capitulo/${idCapitulo}`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        // Formata as perguntas para o formato esperado pelo QuestionCard
        const formattedQuestions = response.data.map((q, index) => ({
          idPergunta: q.idPergunta,
          number: index + 1,
          text: q.textoPergunta,
          // Junta as alternativas disponíveis em um array
          answers: [q.alternativa1, q.alternativa2, q.alternativa3, q.alternativa4].filter(a => a),
          correctAnswer: q.respostaCorreta
        }));

        if (formattedQuestions.length === 0) {
            // Caso não haja quiz, pode-se concluir automaticamente ou avisar
            alert("Não há perguntas de quiz para este capítulo. Ou login não realizado");
            handleConcluirCapitulo();
            return;
        }

        setQuestions(formattedQuestions);
      } catch (err) {
        console.error("Erro ao carregar o quiz:", err);
        alert("Não foi possível carregar as perguntas do quiz.");
      } finally {
        setLoading(false);
      }
    };

    fetchQuizQuestions();
  }, [idCapitulo, token]);
  
  // --- LÓGICA DE CONCLUSÃO DO CAPÍTULO ---
  const handleConcluirCapitulo = async () => {
    if (!token) return; 

    try {
        await axios.patch(`${API_URL}/usercapitulo/concluir`, 
            { idCapitulo: parseInt(idCapitulo) }, 
            { 
                headers: { 
                    Authorization: `Bearer ${token}`, 
                    'Content-Type': 'application/json' 
                } 
            }
        );
        // Exibe o modal de parabéns e depois redireciona
        setShowModal(true); 
    } catch (err) {
        console.error("Erro ao concluir capítulo após quiz:", err);
        alert("Falha ao registrar conclusão. Tente novamente.");
        // Navega de volta mesmo com erro para não prender o usuário
        navigate('/paginaCapitulos'); 
    }
  };


  // --- LÓGICA DE RESPOSTA ---
  const handleAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    
    // 1. Verifica se a resposta está correta e atualiza o score
    if (selectedAnswer === currentQuestion.correctAnswer) {
        setScore(prevScore => prevScore + 1);
    }

    // 2. Verifica se é a última pergunta
    if (currentQuestionIndex === questions.length - 1) {
        // Agora, o modal/conclusão depende do score.
        // Vou assumir que precisa acertar TODAS (score deve ser igual ao total de perguntas)
        
        // DICA: O score total só será atualizado após o setState, 
        // mas aqui podemos usar a lógica para o check da última resposta.
        
        // Se acertou a última E o score anterior + 1 (se acertou) é igual ao total
        const finalScore = selectedAnswer === currentQuestion.correctAnswer ? score + 1 : score;
        
        if (finalScore === questions.length) {
            handleConcluirCapitulo(); // Conclui e mostra o modal de sucesso
        } else {
            // Se errou ou não acertou todas, mostra um modal de falha (opcional)
            alert(`Você acertou ${finalScore} de ${questions.length}. Tente novamente!`);
            navigate(`/paginaCapitulos`); // Redireciona de volta
        }

    } else {
      // 3. Vai para a próxima pergunta
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // --- Renderização ---
  if (loading) return <div className="quizContainer">Carregando Quiz...</div>;
  if (questions.length === 0 && !showModal) return <div className="quizContainer">Nenhuma pergunta encontrada para este quiz. Ou login não realizado</div>;
  
  const currentQuestion = questions[currentQuestionIndex];


  return (
    <div>
      <Navbar bgColor="bgPurple" />

      <div className="quizContainer">
        {/* Usando rabbitImg e clockImg que você descomentou (presume-se que o import está correto) */}
        <img src={rabbitImg} alt="Coelho" className="coelhoImg" />

        {/* Se não terminou, mostra pergunta */}
        {!showModal && currentQuestion && (
          <QuestionCard
            questionNumber={currentQuestion.number}
            questionText={currentQuestion.text}
            // Mapeia o array de respostas para o formato do seu componente
            answers={currentQuestion.answers} 
            onAnswer={handleAnswer}
            clockImg={clockImg}
          />
        )}
        
        {/* Modal de parabéns */}
        {showModal && (
          <ModalCongratulations 
            onClose={() => navigate('/paginaCapitulos')} 
            message="Parabéns! Você concluiu o capítulo e desbloqueou o próximo." 
          />
        )}
        
        {/* Exibe o score atual (opcional) */}
        {!showModal && questions.length > 0 && (
            <div style={{ marginTop: '20px', textAlign: 'center', color: '#fff' }}>
                Progresso: {currentQuestionIndex + 1} / {questions.length} | Acertos até agora: {score}
            </div>
        )}
      </div>
    </div>
  );
}

// export default QuizPage; // Não precisa se já estiver no export default acima