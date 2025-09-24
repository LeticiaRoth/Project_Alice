import React from 'react';
import '../styles/Home.css';
import ImageFooter from "../assets/ImageFooter.svg"; 

const Footer = () => {
  return (
    <footer className="footer">
      {/* imagem de fundo arredondado */}
      <div className="footer-bg">
        <img src={ImageFooter} alt="Buraco Wonderland" />
      </div>

      <div className="footer-cards">
        <div className="card">
          <h3>Sobre nós</h3>
          <p>
            Um site que ajuda crianças de todos os lugares a se interessarem mais
            pela leitura, de forma didática e dinâmica.
          </p>
        </div>
        <div className="card">
          <h3>Nossos serviços</h3>
          <p>
            Além da leitura dos textos, com a interação em número de letras e palavras,
            as crianças ganham selos conforme avançam na história.
          </p>
        </div>
        <div className="card">
          <h3>Equipe Desenvolvedora</h3>
          <p>
            Além da leitura dos textos, com a interação em número de letras e palavras,
            as crianças ganham selos conforme avançam na história.
          </p>
        </div>
      </div>

      <hr />
      <p className="copyright">
        Todos os direitos reservados - Setembro de 2025 - Equipe MyWordland
      </p>
    </footer>
  );
};

export default Footer;
