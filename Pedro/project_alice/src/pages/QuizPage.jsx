import React from "react";

import Header from "../components/QuizPage/Header";
import QuestionCard from "../components/QuizPage/QuestionCard";

import "../styles/QuizPage.css";

const QuizPage = () => {
  return (
    <div className="app">
      <Header />
      <main className="mainContent">
        <QuestionCard questionNumber={1} />
      </main>
    </div>
  );
};

export default QuizPage;
