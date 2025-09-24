import React from 'react';
import '../styles/Home.css';

const Card = ({ title, text }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Card;