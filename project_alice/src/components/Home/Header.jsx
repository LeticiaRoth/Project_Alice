import React from 'react';
import '../../styles/Home.css';
import Logo from "../../assets/LogoMyWordland.svg"; 

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="My Wordland Logo" className="logo" />
    </header>
  );
};

export default Header;
