package br.com.chapeleiro.chapeleiro.aplicacao.pagina;


import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import jakarta.persistence.*;

@Entity(name = "pagina")
@Table(name = "pagina")
public class PaginaModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer idPagina;
    @Column(name = "texto")
    private String textoPagina;
    @Column(name = "numero")
    private Integer numeroPagina;
    @ManyToOne
    @JoinColumn(name = "id_capitulo", referencedColumnName = "id")
    private CapituloModel capitulo;

    public PaginaModel() {
    }

    public PaginaModel(Integer idPagina, String textoPagina, Integer numeroPagina, CapituloModel capitulo) {
        this.idPagina = idPagina;
        this.textoPagina = textoPagina;
        this.numeroPagina = numeroPagina;
        this.capitulo = capitulo;
    }

    public Integer getIdPagina() {
        return idPagina;
    }

    public void setIdPagina(Integer idPagina) {
        this.idPagina = idPagina;
    }

    public String getTextoPagina() {
        return textoPagina;
    }

    public void setTextoPagina(String textoPagina) {
        this.textoPagina = textoPagina;
    }

    public Integer getNumeroPagina() {
        return numeroPagina;
    }

    public void setNumeroPagina(Integer numeroPagina) {
        this.numeroPagina = numeroPagina;
    }

    public CapituloModel getCapitulo() {
        return capitulo;
    }

    public void setCapitulo(CapituloModel capitulo) {
        this.capitulo = capitulo;
    }
}
