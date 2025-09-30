import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button className="arrowButton" onClick={onClick}>
      <span className="arrowShape"></span>
      <span className="arrowText">{text}</span>
    </button>
  );
}
