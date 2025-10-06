import React, { useState } from "react";
import '../styles/SinopsePage.css';

import Alice from '../assets/Imagens/Sinopse/alice.svg';
import Fundo from '../assets/Imagens/Sinopse/fundo.svg';
import Livro from '../assets/Imagens/Sinopse/livro.svg';

function Sinopse() {
  // Conteúdo das páginas
  const paginas = [
    {
      titulo: "Alice no País das Maravilhas",
      texto: `
        Alice no País das Maravilhas é a obra infantil mais conhecida de Charles Lutwidge Dodgson, sob o pseudônimo de Lewis Carroll. 
        O livro conta a história de uma menina chamada Alice que ao perseguir um coelho branco antropomórfico, acaba sendo transportada para um lugar fantástico, 
        povoado de criaturas peculiares, como o Chapeleiro Louco, a Rainha de Copas, a Lagarta e o Gato de Cheshire. Ao longo de sua jornada, 
        Alice vive diversas aventuras e é confrontada com o absurdo, com o impossível, e passa a questionar tudo o que aprendeu até ali. 
        Essa é uma das obras mais célebres do gênero literário nonsense.`
    },
    {
      titulo: "Alice no País das Maravilhas",
      texto: `
        A história foi criada por Charles Lutwidge Dodgson no dia 4 de julho de 1862, durante um passeio de barco pelo rio Tâmisa.
        Ele inventou a narrativa para entreter as filhas do amigo Henry George Liddel: Loriny, Edith e Alice. 
        Evidenciando que a protagonista foi inspirada em Alice Liddel.`
    },
    {
      titulo: "Alice no País das Maravilhas",
      texto: `
      Em 26 de Novembro de 1864, o autor escreveu a primeira versão da obra a partir do seu improviso, Alice debaixo da Terra, para dar de presente à verdadeira Alice.
      Posteriormente, reescreveu o livro para publicação, aumentando a história e acrescentando passagens como a do Chapeleiro Louco e a do Gato de Cheshire. 
      A primeira edição, com tiragem de duas mil cópias e publicada em 4 de Julho de 1865, foi tirada de circulação porque continha alguns erros. 
      No ano seguinte, a segunda tiragem foi um grande sucesso, projetando Alice e o seu País das Maravilhas para o imaginário comum.`
    },
    {
      titulo: "Alice no País das Maravilhas",
      texto: `
      Atualmente, a obra tem mais de uma centena de edições e está traduzida para mais de cento e vinte e cinco línguas. O livro possui ainda uma continuação: 
      Alice no País do Espelho (muitas vezes traduzido como Alice através do espelho), 
      onde a protagonista atravessa um espelho e viaja para um mundo onde tudo é ao contrário, animais e flores falam, e peças de xadrez ganham vida.`
    },
    {
      titulo: "Alice no País das Maravilhas",
      texto: `
      Essa edição contempla os dois livros, Alice no País das Maravilhas e Alice no País do Espelho, com tradução e adaptação de Monteiro Lobato, em versão única em um livro vira-vira, com ilustrações do inglês John Tenniel.
      A tradução de Monteiro Lobato não é apenas uma recontagem do texto de Lewis Carroll para o público infantojuvenil brasileiro. Lobato acrescenta e retira informações da obra original, 
      adaptando o vocabulário e até mesmo algumas falas de Alice, ambientando o leitor em um contexto mais próximo da realidade brasileira.`
    }
  ];

  // Estado da página atual
  const [paginaAtual, setPaginaAtual] = useState(0);

  // Funções de navegação
  const proximaPagina = () => {
    if (paginaAtual < paginas.length - 1) setPaginaAtual(paginaAtual + 1);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  };

  return (
    <section className="synopsis">
      <h2>Sinopse</h2>
      <h3>{paginas[paginaAtual].titulo}</h3>
      <p>{paginas[paginaAtual].texto}</p>

      <div className="synopsis-controls">
        <button onClick={paginaAnterior} disabled={paginaAtual === 0}>
          Voltar
        </button>
        <button onClick={proximaPagina} disabled={paginaAtual === paginas.length - 1}>
          Próxima página
        </button>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="appContainer">
      {/* Fundo */}
      <img src={Fundo} alt="Fundo" className="backgroundImage" />

      {/* Cabeçalho */}
      <header className="header">
        <nav className="navMenu">
          <ul>
            <li>Início</li>
            <li>Tutorial</li>
            <li>Meus Selos</li>
          </ul>
        </nav>
      </header>

      {/* Conteúdo */}
      <div className="contentWrapper">
        <img src={Alice} alt="Alice" className="aliceImage" />

        <div className="bookDisplay">
          <img src={Livro} alt="Livro aberto" className="bookOpen" />
        </div>

        <Sinopse />
      </div>
    </div>
  );
}

export default App;
