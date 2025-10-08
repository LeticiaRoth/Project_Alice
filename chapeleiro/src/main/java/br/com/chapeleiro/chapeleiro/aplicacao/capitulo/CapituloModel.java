package br.com.chapeleiro.chapeleiro.aplicacao.capitulo;

import jakarta.persistence.*;

@Entity(name = "capitulo")
@Table(name = "capitulo")
public class CapituloModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer idCapitulo;
    @Column(name = "nome")
    private String nomeCapitulo;
    @Column(name = "background")
    private String background;
    @Column(name = "background_card_bloqueado")
    private String backgroundCardBloqueado;
    @Column(name = "background_card_desbloqueado")
    private String backgroundCardDesbloqueado;
    @Column(name = "personagem_safe")
    private String personagemSafe;
    @Column(name = "personagem_eba")
    private String personagemEba;
    @Column(name = "personagem_mad")
    private String personagemMad;
    @Column(name = "ordem")
    private Integer ordem;
    @Column(name = "selo")
    private String selo;

    public CapituloModel() {
    }

    public CapituloModel(Integer idCapitulo, String nomeCapitulo, String background, String backgroundCardBloqueado, String backgroundCardDesbloqueado, String personagemSafe, String personagemEba, String personagemMad, Integer ordem, String selo) {
        this.idCapitulo = idCapitulo;
        this.nomeCapitulo = nomeCapitulo;
        this.background = background;
        this.backgroundCardBloqueado = backgroundCardBloqueado;
        this.backgroundCardDesbloqueado = backgroundCardDesbloqueado;
        this.personagemSafe = personagemSafe;
        this.personagemEba = personagemEba;
        this.personagemMad = personagemMad;
        this.ordem = ordem;
        this.selo = selo;
    }

    public Integer getIdCapitulo() {
        return idCapitulo;
    }

    public void setIdCapitulo(Integer idCapitulo) {
        this.idCapitulo = idCapitulo;
    }

    public String getNomeCapitulo() {
        return nomeCapitulo;
    }

    public void setNomeCapitulo(String nomeCapitulo) {
        this.nomeCapitulo = nomeCapitulo;
    }

    public String getBackground() {
        return background;
    }

    public void setBackground(String background) {
        this.background = background;
    }

    public String getBackgroundCardBloqueado() {
        return backgroundCardBloqueado;
    }

    public void setBackgroundCardBloqueado(String backgroundCardBloqueado) {
        this.backgroundCardBloqueado = backgroundCardBloqueado;
    }

    public String getBackgroundCardDesbloqueado() {
        return backgroundCardDesbloqueado;
    }

    public void setBackgroundCardDesbloqueado(String backgroundCardDesbloqueado) {
        this.backgroundCardDesbloqueado = backgroundCardDesbloqueado;
    }

    public String getPersonagemSafe() {
        return personagemSafe;
    }

    public void setPersonagemSafe(String personagemSafe) {
        this.personagemSafe = personagemSafe;
    }

    public String getPersonagemEba() {
        return personagemEba;
    }

    public void setPersonagemEba(String personagemEba) {
        this.personagemEba = personagemEba;
    }

    public String getPersonagemMad() {
        return personagemMad;
    }

    public void setPersonagemMad(String personagemMad) {
        this.personagemMad = personagemMad;
    }

    public Integer getOrdem() {
        return ordem;
    }

    public void setOrdem(Integer ordem) {
        this.ordem = ordem;
    }

    public String getSelo() {
        return selo;
    }

    public void setSelo(String selo) {
        this.selo = selo;
    }
}
