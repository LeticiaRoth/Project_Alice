import React, { useState } from "react";
import '../../styles/SinopsePage.css';

function Sinopse() {
  const paginas = [
    {
      titulo: "Alice no País das Maravilhas",
      texto: `Imagine a seguinte história: Alice, uma menina super curiosa, segue um Coelho Branco apressado e cai em um mundo mágico e maluco.

Lá, ela vira um gigante e depois fica pequenininha, encontra personagens como um gato que sorri e uma rainha que gosta de gritar. É uma aventura cheia de sonhos, mistérios e muita diversão!`
    },
    {
      titulo: "Alice no País das Maravilhas",
      texto: `A história foi criada por Charles Lutwidge Dodgson no dia 4 de julho de 1862, durante um passeio de barco pelo rio Tâmisa.
Ele inventou a narrativa para entreter as filhas do amigo Henry George Liddel: Loriny, Edith e Alice.`
    },
    {
      titulo: "Alice no País das Maravilhas",
      texto: `Em 26 de novembro de 1864, o autor escreveu a primeira versão da obra para dar de presente à verdadeira Alice.
Posteriormente, reescreveu o livro para publicação, acrescentando passagens como a do Chapeleiro Louco e a do Gato de Cheshire.`
    }
  ];

  const [paginaAtual, setPaginaAtual] = useState(0);

  const proximaPagina = () => {
    if (paginaAtual < paginas.length - 1) setPaginaAtual(paginaAtual + 1);
  };

  const paginaAnterior = () => {
    if (paginaAtual > 0) setPaginaAtual(paginaAtual - 1);
  };

  return (
     <div className="synopsisWrapper">
      <div className="synopsisStrip" aria-hidden="true"></div>
      <div className="synopsisDivider" aria-hidden="true"></div>

      <div className="synopsisBox">
        <div>
          <h2>Sinopse</h2>
          <h3>{paginas[paginaAtual].titulo}</h3>
          <p>{paginas[paginaAtual].texto}</p>
        </div>

        <div className="synopsis-controls">
          <button onClick={paginaAnterior} disabled={paginaAtual === 0}>
            Voltar
          </button>
          <button onClick={proximaPagina} disabled={paginaAtual === paginas.length - 1}>
            Próxima página
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sinopse;
