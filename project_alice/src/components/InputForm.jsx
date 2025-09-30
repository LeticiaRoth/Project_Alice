import React from "react";
// import ErrorIcon from "../assets/error.svg"; // Ícone de erro vermelho

import "../../styles/Login.css";

const LoginInput = ({ label, type, name, placeholder, value, onChange, error }) => {
  return (
    <div className="inputField">
      <label className={error ? "label errorLabel" : "label"}>{label}</label>
      <div className="inputWrapper">
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={error ? "input errorInput" : "input"}
        />
        {error && <img src={ErrorIcon} alt="Erro" className="errorIcon" />}
      </div>
    </div>
  );
};

export default LoginInput;
