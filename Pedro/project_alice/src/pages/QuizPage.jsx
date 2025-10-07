import React, { useState } from "react";
import Navbar from '../components/NavbarTwo';
import QuestionCard from "../components/QuizPage/QuestionCard";
import ModalCongratulations from '../components/QuizPage/ModalCongratulations';
import rabbitImg from '../assets/Imagens/QuizPage/WhiteRabbit.svg';
import clockImg from '../assets/Imagens/QuizPage/Clock.svg';
import rightButton from '../assets/Imagens/QuizPage/ImageButtonAvancar.svg';
import '../styles/QuizPage.css';

const questions = [
  {
    number: 1,
    text: "O que Alice seguiu que a fez cair na toca?",
    answers: ["Uma flor que falava.", "Um Coelho Branco"]
  },
  {
    number: 2,
    text: "Depois de cair na toca, Alice encontra um bolo com as palavras 'COMA-ME'. O que acontece com ela quando ela come o bolo?",
    answers: ["Ela começa a encolher", "Ela começa a crescer"]
  },
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleAnswer = (answer) => {
    console.log("Resposta escolhida:", answer);

    // se for a última pergunta, mostra modal
    if (currentQuestion === questions.length - 1) {
      setShowModal(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div>
      <Navbar bgColor="bgPurple" />

      <div className="quizContainer">
        <img src={rabbitImg} alt="Coelho" className="coelhoImg" />

        {/* Se não terminou, mostra pergunta */}
        {!showModal && (
          <QuestionCard
            questionNumber={questions[currentQuestion].number}
            questionText={questions[currentQuestion].text}
            answers={questions[currentQuestion].answers}
            onAnswer={handleAnswer}
            clockImg={clockImg}
          />
        )}

        {/* Modal de parabéns */}
        {showModal && <ModalCongratulations onClose={() => setShowModal(false)} />}
      </div>
    </div>
  );
}