import React from 'react';
import '../styles/Home.css';
import ImageFooter from "../assets/ImageFooter.svg"; 

const Footer = () => {
  return (
    <footer className="footer">
    {/* imagem do buraco */}
    <div className="footerBg">
    <img src={ImageFooter} alt="Buraco Wonderland" />
    </div>
    
    {/* títulos alinhados */}
    <div className="footerCards">
    <div className="footerCard">
    <h3>Sobre nós</h3>
    <p>Somos uma empresa que busca soluções inovadoras para nossos clientes.</p>
    </div>
    <div className="footerCard">
    <h3>Nossos Serviços</h3>
    <p>Oferecemos desenvolvimento de sistemas, consultoria e suporte técnico.</p>
    </div>
    <div className="footerCard">
    <h3>Equipe</h3>
    <p>Contamos com profissionais especializados e dedicados ao sucesso do projeto.</p>
    </div>
    </div>
    
    <p className="copyright">
    Todos os direitos reservados - Setembro de 2025 - Equipe MyWordland
    </p>
    </footer>
    
  );
};

export default Footer;
