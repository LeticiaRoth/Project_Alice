import { useState, useEffect } from "react";
import api from "../../api/axios";

export default function BookReader() {
  const [allPages, setAllPages] = useState([]);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [chapterId, setChapterId] = useState("");
  const [chapters, setChapters] = useState([]);

  // 🔹 buscar capítulos
  useEffect(() => {
    api.get("/capitulo")
      .then((res) => setChapters(res.data))
      .catch((err) => console.error("Erro ao carregar capítulos:", err));
  }, []);

  // 🔹 buscar todas as páginas
  useEffect(() => {
    api.get("/pagina")
      .then((res) => setAllPages(res.data))
      .catch((err) => console.error("Erro ao carregar todas páginas:", err));
  }, []);

  // 🔹 buscar páginas filtradas
  useEffect(() => {
    const url = chapterId ? `/pagina/capitulo/${chapterId}` : "/pagina";

    api.get(url)
      .then((res) => {
        setPages(res.data);
        setCurrentPage(0);
      })
      .catch((err) => console.error("Erro ao carregar páginas:", err));
  }, [chapterId]);

  // 🔹 adicionar navegação com setas do teclado
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "ArrowRight") {
        // seta ➡️ vai para a próxima página
        setCurrentPage((p) => Math.min(p + 1, pages.length - 1));
      } else if (event.key === "ArrowLeft") {
        // seta ⬅️ volta uma página
        setCurrentPage((p) => Math.max(p - 1, 0));
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    // limpar o listener ao desmontar o componente
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [pages.length]);

  if (pages.length === 0 || allPages.length === 0) {
    return <p>Carregando...</p>;
  }

  const page = pages[currentPage];

  const bookProgress =
    ((allPages.findIndex((p) => p.idPagina === page.idPagina) + 1) /
      allPages.length) *
    100;

  const chapterPages = allPages.filter(
    (p) => p.capitulo.idCapitulo === page.capitulo.idCapitulo
  );

  const chapterIndex = chapterPages.findIndex(
    (p) => p.idPagina === page.idPagina
  );

  const chapterProgress = ((chapterIndex + 1) / chapterPages.length) * 100;

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <select
        value={chapterId}
        onChange={(e) => setChapterId(e.target.value)}
        style={{ marginBottom: "20px" }}
      >
        <option value="">📖 Livro inteiro</option>
        {chapters.map((cap) => (
          <option key={cap.idCapitulo} value={cap.idCapitulo}>
            {cap.nomeCapitulo}
          </option>
        ))}
      </select>

      <h2>
        {page.capitulo?.nomeCapitulo || "Livro"} – Página {page.numeroPagina}
      </h2>

      {/* barra de progresso capítulo */}
      <div style={{ marginBottom: "5px" }}>
        <p>Progresso do capítulo: {Math.round(chapterProgress)}%</p>
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#ddd",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: `${chapterProgress}%`,
              height: "100%",
              background: "#4caf50",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      {/* barra de progresso livro */}
      <div style={{ marginBottom: "10px" }}>
        <p>Progresso do livro: {Math.round(bookProgress)}%</p>
        <div
          style={{
            width: "100%",
            height: "10px",
            background: "#ddd",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: `${bookProgress}%`,
              height: "100%",
              background: "#2196f3",
              transition: "width 0.3s ease",
            }}
          />
        </div>
      </div>

      <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>
        {page.textoPagina}
      </p>

      {/* navegação */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 0))}
          disabled={currentPage === 0}
        >
          ◀ Página anterior
        </button>

        <button
          onClick={() =>
            setCurrentPage((p) => Math.min(p + 1, pages.length - 1))
          }
          disabled={currentPage === pages.length - 1}
        >
          Próxima página ▶
        </button>
      </div>
    </div>
  );
}
