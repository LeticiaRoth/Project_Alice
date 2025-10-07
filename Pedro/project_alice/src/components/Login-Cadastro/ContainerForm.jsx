import React from "react";

// 🌟 Importante: Adicionamos a prop 'handleSubmit' 🌟
export default function ContainerForm({ children, handleSubmit }) {
  return (
    // 1. Mudamos <div> para <form>
    // 2. Aplicamos a prop 'handleSubmit' no evento onSubmit do formulário
    <form className="formContainer" onSubmit={handleSubmit}>
      {children}
    </form>
  );
}