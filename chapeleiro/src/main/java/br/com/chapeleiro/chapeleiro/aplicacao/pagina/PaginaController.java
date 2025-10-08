package br.com.chapeleiro.chapeleiro.aplicacao.pagina;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pagina")
public class PaginaController {

    @Autowired
    PaginaRepository repository;

    @Autowired
    CapituloRepository capituloRepository;

    @GetMapping
    public ResponseEntity getAll(){
        List<PaginaModel> listPaginas = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listPaginas);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable(value = "id") Integer id){
        Optional<PaginaModel> pagina = repository.findById(id);
        if(pagina.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Pagina not found");
        }
        return ResponseEntity.status(HttpStatus.OK).body(pagina.get());
    }

    @GetMapping("/capitulo/{idCapitulo}")
    public ResponseEntity getByCapitulo(@PathVariable(value = "idCapitulo") Integer idCapitulo){
        Optional<CapituloModel> capitulo = capituloRepository.findById(idCapitulo);
        if(capitulo.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Capitulo not found");
        }
        List<PaginaModel> paginas = repository.findByCapitulo(capitulo.get());
        return ResponseEntity.status(HttpStatus.OK).body(paginas);
    }

}
