import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputForm from "../../components/InputForm";
import '../../styles/Login.css';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
    });
    
    const [errors, setErrors] = useState({});
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Campo obrigatório";
        if (!formData.password) tempErrors.password = "Campo obrigatório";
        setErrors(tempErrors);
    };
    
    return (
        <form className="loginForm" onSubmit={handleSubmit}>
        <InputForm
        label="Seu nome:"
        type="text"
        name="name"
        placeholder="Exemplo: Miguel"
        value={formData.name}
        onChange={handleChange}
        error={errors.name}
        />
        
        <InputForm
        label="Sua senha:"
        type="password"
        name="password"
        placeholder="Exemplo: 123miguel"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
        />
        
        <p className="firstTime">
        Sua primeira vez lendo o livro?{" "}
        <Link to="/register">CLIQUE AQUI</Link>
        </p>
        
        <button type="submit" className="loginButton">
        ENTRAR
        </button>
        </form>
    );
};

export default LoginForm;
