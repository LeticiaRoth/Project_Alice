package br.com.chapeleiro.chapeleiro.aplicacao.pagina;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaginaRepository extends JpaRepository<PaginaModel, Integer> {
    List<PaginaModel> findByCapitulo(CapituloModel capitulo);
}