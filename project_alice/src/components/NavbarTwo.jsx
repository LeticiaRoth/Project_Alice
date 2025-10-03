import React from "react"; 
import { Link } from "react-router-dom";

import '../styles/Navbar.css'

export default function NavbarTwo( {bgColor}) {
  return (
    <nav className={`navbarContainer ${bgColor}`}>
      <div className="navbarLinks">
        <Link to="/" className="navLink">Início</Link>
        <Link to="/paginaCapitulo" className="navLink">Livro</Link>
        <Link to="/tutorial" className="navLink">Tutorial</Link>
        <Link to="/paginaSelo" className="navLink">Meus Selos</Link>
      </div>
    </nav>
  );
}
