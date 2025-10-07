import React from 'react';
import '../styles/FooterPage.css';
import ImageFooter from '../assets/Imagens/ImageFooter.svg';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundImage: `url(${ImageFooter})` }}>
      <div className="footerOverlay">
        {/* textos organizados em 3 colunas */}
        <div className="footerCards">
          <div className="footerCard">
            <h3>Sobre nós</h3>
            <p>
              Um site que proporciona uma leitura imersiva e didática para todos os apaixonados em livros e leitura. em livros e leitura.
            </p>
          </div>
          <div className="footerCard">
            <h3>Nossos Serviços</h3>
            <p>
              Nossos serviços incluem proporcionar uma experiência encantada e única
              para o nosso público, permitindo a imersão no mundo da Alice.
            </p>
          </div>
          <div className="footerCard">
            <h3>Contato</h3>
            <p>
              Entre em contato:
            </p>
            <p>
              mywordland@gmail.com
            </p>
            <p>(19) 9933-8734</p>
          </div>
        </div>

        {/* copyright */}
        <p className="copyright">
          Todos os direitos reservados - Setembro de 2025 - Equipe MyWordland
        </p>
      </div>
    </footer>
  );
};

export default Footer;