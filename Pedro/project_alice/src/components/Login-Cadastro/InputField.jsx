// InputField.jsx (Versão Corrigida)

import React from "react";

// 🌟 1. Adicionamos 'value' e 'onChange' às props
export default function InputField({ label, type, placeholder, required, error, value, onChange }) {
   return (
    <div className="inputGroup">
       <label className={error ? "errorLabel" : ""}>{label}</label>
        <input 
            type={type} 
            placeholder={placeholder} 
            required={required} 
            className={error ? "inputError" : ""} 
            
            // 🌟 2. Ligamos o valor do campo ao estado do componente pai
            value={value} 
            
            // 🌟 3. Ligamos o evento de mudança à função de atualização do estado
            onChange={onChange}
        />
    </div>
  );
}