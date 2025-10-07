package br.com.chapeleiro.chapeleiro.aplicacao.usuarioCapitulo;

import br.com.chapeleiro.chapeleiro.aplicacao.capitulo.CapituloModel;
import br.com.chapeleiro.chapeleiro.aplicacao.user.UserModel;
import jakarta.persistence.*;

@Entity(name = "usuario_capitulo")
@Table(name = "usuario_capitulo")
public class UserCapituloModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer idUsuarioCapitulo;

    @ManyToOne
    @JoinColumn(name = "id_usuario", referencedColumnName = "id")
    private UserModel user;

    @ManyToOne
    @JoinColumn(name = "id_capitulo", referencedColumnName = "id")
    private CapituloModel capitulo;

    @Column(name = "concluido")
    private boolean concluidoUsuarioCapitulo = false;

    @Column(name = "progresso")
    private Integer progressoUsuarioCapitulo;

    public UserCapituloModel() {
    }

    public UserCapituloModel(Integer idUsuarioCapitulo, UserModel user, CapituloModel capitulo, boolean concluidoUsuarioCapitulo, Integer progressoUsuarioCapitulo) {
        this.idUsuarioCapitulo = idUsuarioCapitulo;
        this.user = user;
        this.capitulo = capitulo;
        this.concluidoUsuarioCapitulo = concluidoUsuarioCapitulo;
        this.progressoUsuarioCapitulo = progressoUsuarioCapitulo;
    }

    public Integer getIdUsuarioCapitulo() {
        return idUsuarioCapitulo;
    }

    public void setIdUsuarioCapitulo(Integer idUsuarioCapitulo) {
        this.idUsuarioCapitulo = idUsuarioCapitulo;
    }

    public UserModel getUser() {
        return user;
    }

    public void setUser(UserModel user) {
        this.user = user;
    }

    public CapituloModel getCapitulo() {
        return capitulo;
    }

    public void setCapitulo(CapituloModel capitulo) {
        this.capitulo = capitulo;
    }

    public boolean isConcluidoUsuarioCapitulo() {
        return concluidoUsuarioCapitulo;
    }

    public void setConcluidoUsuarioCapitulo(boolean concluidoUsuarioCapitulo) {
        this.concluidoUsuarioCapitulo = concluidoUsuarioCapitulo;
    }

    public Integer getProgressoUsuarioCapitulo() {
        return progressoUsuarioCapitulo;
    }

    public void setProgressoUsuarioCapitulo(Integer progressoUsuarioCapitulo) {
        this.progressoUsuarioCapitulo = progressoUsuarioCapitulo;
    }
}
