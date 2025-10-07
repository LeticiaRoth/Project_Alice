import React from "react";
import "../../styles/ModalCongratulations.css";
import ButtonModal from "../QuizPage/ButtonModal";

export default function ModalCongratulations({ onClose }) {
  return (
    <div className="modalOverlay">
      <div className="modalContent">
        <h1 className="modalTitle">Parabéns</h1>
        <p className="modalText">
          Ótimo trabalho! Você completou mais um capítulo de Alice no País das Maravilhas
          e respondeu a todas as perguntas corretamente. 
          É uma ótima conquista! 
          Continue lendo, pois o País das Maravilhas tem muito mais surpresas para você descobrir.
        </p>
        <p className="modalLink">
          O que será que Alice encontrará em seguida? Vamos descobrir!
        </p>
        <ButtonModal />
      </div>
    </div>
  );
}
