import React, { useState } from "react";
import InputField from "../../components/QuizPage/Input";

const QuestionCard = ({ questionNumber }) => {
  const [answers, setAnswers] = useState(["", ""]);

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    console.log("Respostas:", answers);
  };

  return (
    <div className="questionCardContainer">
      {/* <img src={rabbitImage} alt="Rabbit" className="rabbitImage" />
      <img src={clockImage} alt="Clock" className="clockImage" /> */}
      <div className="questionCard">
        <div className="questionTitle">PERGUNTA {questionNumber}</div>
        <InputField
          placeholder="Resposta 1"
          value={answers[0]}
          onChange={(e) => handleChange(0, e.target.value)}
        />
        <InputField
          placeholder="Resposta 2"
          value={answers[1]}
          onChange={(e) => handleChange(1, e.target.value)}
        />
        {/* <NextButton onClick={handleNext} /> */}
      </div>
    </div>
  );
};

export default QuestionCard;
