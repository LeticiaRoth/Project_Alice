import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation(); // para detectar rota ativa

  const linkStyle = (path: string) => ({
    marginRight: '15px',
    textDecoration: location.pathname === path ? 'underline' : 'none',
    color: location.pathname === path ? 'blue' : 'black',
    fontWeight: location.pathname === path ? 'bold' : 'normal',
  });

  return (
    <nav style={{ padding: '20px', textAlign: 'center', borderBottom: '1px solid #ccc' }}>
      <Link to="/" style={linkStyle('/')}>Home</Link>
      <Link to="/sobre" style={linkStyle('/sobre')}>Sobre</Link>
    </nav>
  );
}

export default Navbar;
