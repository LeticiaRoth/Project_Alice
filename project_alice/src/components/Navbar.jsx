import React from "react"; 
import { Link } from "react-router-dom";

import '../styles/Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbarContainer">
      <div className="navbarLinks">
        <Link to="/" className="navLink">Início</Link>
        <Link to="/tutorial" className="navLink">Tutorial</Link>
        <Link to="/paginaSelo" className="navLink">Meus Selos</Link>
      </div>
    </nav>
  );
}
