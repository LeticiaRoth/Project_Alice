use chapeleiro;

-- Inserindo 5 usuários
INSERT INTO usuario (nome, email, senha) VALUES
('João Silva', 'joao@email.com', '123456'),
('Maria Souza', 'maria@email.com', '123456'),
('Carlos Lima', 'carlos@email.com', '123456'),
('Ana Costa', 'ana@email.com', '123456'),
('Pedro Alves', 'pedro@email.com', '123456');

-- Populando usuario_capitulo
-- Usuário 1: capítulos 1 a 5 concluídos
INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso) VALUES
(1, 1, TRUE, 100),
(1, 2, TRUE, 100),
(1, 3, TRUE, 100),
(1, 4, TRUE, 100),
(1, 5, TRUE, 100),
(1, 6, FALSE, 0),
(1, 7, FALSE, 0),
(1, 8, FALSE, 0),
(1, 9, FALSE, 0),
(1, 10, FALSE, 0),
(1, 11, FALSE, 0),
(1, 12, FALSE, 0);

-- Usuário 2: todos capítulos não concluídos
INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 2, id, FALSE, 0 FROM capitulo;

-- Usuário 3: todos capítulos não concluídos
INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 3, id, FALSE, 0 FROM capitulo;

-- Usuário 4: todos capítulos não concluídos
INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 4, id, FALSE, 0 FROM capitulo;

-- Usuário 5: todos capítulos não concluídos
INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 5, id, FALSE, 0 FROM capitulo;

