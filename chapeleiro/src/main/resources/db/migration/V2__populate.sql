INSERT INTO capitulo (nome, ordem, background_card_desbloqueado, background_card_bloqueado, selo) VALUES
('DENTRO DA TOCA DO COELHO', 1, 'src/assets/Imagens/capitulos/cap1/backgroundCardDesbloqueado.png', null, 'src/assets/Imagens/capitulos/cap1/selo.png'),
('UMA PISCINA DE LÁGRIMAS', 2, 'src/assets/Imagens/capitulos/cap2/backgroundCardDesbloqueado.png', 'src/assets/Imagens/capitulos/cap2/backgroundCardBloqueado.png', 'src/assets/Imagens/capitulos/cap2/selo.png'),
('A CORRIDA MALUCA E UMA HISTÓRIA CAUDALOSA', 3, 'src/assets/Imagens/capitulos/cap3/backgroundCardDesbloqueado.png', 'src/assets/Imagens/capitulos/cap3/backgroundCardBloqueado.png', 'src/assets/Imagens/capitulos/cap3/selo.png'),
('BILL, A LAGARTIXA-BALA', 4, 'src/assets/Imagens/capitulos/cap4/backgroundCardDesbloqueado.png', 'src/assets/Imagens/capitulos/cap4/backgroundCardBloqueado.png', 'src/assets/Imagens/capitulos/cap4/selo.png'),
('CONSELHOS DE UMA TATURANA', 5, 'src/assets/Imagens/capitulos/cap5/backgroundCardDesbloqueado.png', 'src/assets/Imagens/capitulos/cap5/backgroundCardBloqueado.png', 'src/assets/Imagens/capitulos/cap5/selo.png'),
('PORCA E PIMENTA', 6, 'src/assets/Imagens/capitulos/cap6/backgroundCardDesbloqueado.png', 'src/assets/Imagens/capitulos/cap6/backgroundCardBloqueado.png', 'src/assets/Imagens/capitulos/cap6/selo.png'),
('UM CHÁ DAS CINCO MUITO LOUCO', 7, 'src/assets/Imagens/capitulos/cap7/backgroundCardDesbloqueado.png', 'src/assets/Imagens/capitulos/cap7/backgroundCardBloqueado.png', 'src/assets/Imagens/capitulos/cap7/selo.png'),
('O CROQUÉ DA RAINHA', 8, 'src/assets/Imagens/capitulos/cap8/backgroundCardDesbloqueado.png', 'src/assets/Imagens/capitulos/cap8/backgroundCardBloqueado.png', 'src/assets/Imagens/capitulos/cap8/selo.png'),
('A HISTÓRIA DO JABUTI DE MENTIRA', 9, null, null, 'src/assets/Imagens/capitulos/cap9/selo.png'),
('A QUADRILHA DAS LAGOSTAS', 10, null, null, 'src/assets/Imagens/capitulos/cap10/selo.png'),
('QUEM ROUBOU AS TORTAS?', 11, null, null, 'src/assets/Imagens/capitulos/cap11/selo.png'),
('AS EVIDÊNCIAS DE ALICE', 12, null, null, 'src/assets/Imagens/capitulos/cap12/selo.png');

INSERT INTO usuario (nome, email, senha) VALUES
('João Silva', 'joao@email.com', '123456'),
('Maria Souza', 'maria@email.com', '123456'),
('Carlos Lima', 'carlos@email.com', '123456'),
('Ana Costa', 'ana@email.com', '123456'),
('Pedro Alves', 'pedro@email.com', '123456');

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

INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 2, id, FALSE, 0 FROM capitulo;

INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 3, id, FALSE, 0 FROM capitulo;

INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 4, id, FALSE, 0 FROM capitulo;

INSERT INTO usuario_capitulo (id_usuario, id_capitulo, concluido, progresso)
SELECT 5, id, FALSE, 0 FROM capitulo;
