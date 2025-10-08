import React from "react"; 
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { FaSignOutAlt } from "react-icons/fa";
import '../styles/Navbar.css'

export default function Navbar({ bgColor }) {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className={`navbarContainer ${bgColor}`}>
      <div className="navbarLinks">
        <Link to="/" className="navLink">Início</Link>
        <Link to="/tutorial" className="navLink">Tutorial</Link>

        {isAuthenticated ? (
          <>
            <Link to="/paginaSelo" className="navLink">Meus Selos</Link>
            <button className="logoutBtn" onClick={logout}>
              SAIR <FaSignOutAlt className="logoutIcon" />
            </button>
          </>
        ) : (
          <Link to="/login" className="navLink">Login</Link>
        )}
      </div>
    </nav>
  );
}

 