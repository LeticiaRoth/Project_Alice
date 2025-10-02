import React from "react";
import Logo from '../../assets/Imagens/LogoMyWordland.svg';

const Header = () => {
  return (
    <header className="headerLogo">
      <img src={Logo} alt="My Wordland Logo" className="logo" />
    </header>
  );
};

export default Header;
