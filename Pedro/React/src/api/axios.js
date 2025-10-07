// src/api/axios.js
import axios from "axios";

// 🔹 cria uma instância já configurada
const api = axios.create({
  baseURL: "http://localhost:8080", // sua API base
  timeout: 10000, // tempo máximo de resposta (opcional, em ms)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
