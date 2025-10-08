package br.com.chapeleiro.chapeleiro.aplicacao.capitulo;

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
@RequestMapping("/capitulo")
public class CapituloController {

    @Autowired
    CapituloRepository repository;

    @GetMapping
    public ResponseEntity getAll(){
        List<CapituloModel> listCapitulos = repository.findAll();
        return ResponseEntity.status(HttpStatus.OK).body(listCapitulos);
    }

    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable(value = "id") Integer id){
        Optional capitulo = repository.findById(id);
        if(capitulo.isEmpty()){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Capitulo not found");
        }
        return ResponseEntity.status(HttpStatus.FOUND).body(capitulo.get());
    }
}
