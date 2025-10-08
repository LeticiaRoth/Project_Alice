CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) ,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE capitulo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    background VARCHAR(255),
    background_card_bloqueado VARCHAR(255),
    background_card_desbloqueado VARCHAR(255),
    personagem_safe VARCHAR(255),
    personagem_eba VARCHAR(255),
    personagem_mad VARCHAR(255),
    selo VARCHAR(255),
    ordem INT NOT NULL
);

CREATE TABLE pagina (
    id INT AUTO_INCREMENT PRIMARY KEY,
    texto TEXT NOT NULL,
    numero INT NOT NULL,
    id_capitulo INT NOT NULL,
    FOREIGN KEY (id_capitulo) REFERENCES capitulo(id)
);

CREATE TABLE quiz (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_capitulo INT NOT NULL,
    FOREIGN KEY (id_capitulo) REFERENCES capitulo(id)
);

CREATE TABLE pergunta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    texto TEXT NOT NULL,
    id_quiz INT NOT NULL,
    alternativa1 TEXT,
    alternativa2 TEXT,
    alternativa3 TEXT,
    alternativa4 TEXT,
    resposta_correta TEXT NOT NULL,
    FOREIGN KEY (id_quiz) REFERENCES quiz(id)
);

CREATE TABLE usuario_capitulo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_capitulo INT NOT NULL,
    concluido BOOLEAN DEFAULT FALSE NOT NULL,
    progresso INT DEFAULT 0,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_capitulo) REFERENCES capitulo(id)
);
