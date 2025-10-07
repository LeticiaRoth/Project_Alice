#pip install --upgrade mysql-connector-python 

import mysql.connector
import pdfplumber

# Conexão com o banco
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="senai",
    database="chapeleiro"
)
cursor = conn.cursor()

pdf_path = "Alice-no-País-das-maravilhas.pdf"

# Lista dos títulos dos capítulos na ordem da tabela capitulo
titulos_capitulos = [
    "DENTRO DA TOCA DO COELHO",
    "UMA PISCINA DE LÁGRIMAS",
    "A CORRIDA MALUCA E UMA HISTÓRIA CAUDALOSA",
    "BILL, A LAGARTIXA-BALA",
    "CONSELHOS DE UMA TATURANA",
    "PORCA E PIMENTA",
    "UM CHÁ DAS CINCO MUITO LOUCO",
    "O CROQUÉ DA RAINHA",
    "A HISTÓRIA DO JABUTI DE MENTIRA",
    "A QUADRILHA DAS LAGOSTAS",
    "QUEM ROUBOU AS TORTAS?",
    "AS EVIDÊNCIAS DE ALICE"
]

id_capitulo = None
pagina_global = 0
historia_comecou = False
fim_notas = False

with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        if fim_notas:
            break

        pagina_global += 1
        text = page.extract_text()
        if not text:
            continue

        # Detecta se a página contém um título de capítulo (mesmo quebrado)
        linhas = [linha.strip() for linha in text.split("\n")]
        i = 0
        while i < len(linhas):
            linha = linhas[i]

            # Fim do conteúdo relevante
            if linha.lower() == "notas":
                fim_notas = True
                break

            # Detecta título de capítulo com possível quebra de linha
            combinacoes = [linha]
            if i + 1 < len(linhas):
                combinacoes.append(f"{linha} {linhas[i+1]}")
            if i + 2 < len(linhas):
                combinacoes.append(f"{linha} {linhas[i+1]} {linhas[i+2]}")

            cap_encontrado = None
            for combo in combinacoes:
                if combo in titulos_capitulos:
                    cap_encontrado = combo
                    break

            if cap_encontrado:
                historia_comecou = True
                cursor.execute("SELECT id FROM capitulo WHERE nome = %s", (cap_encontrado,))
                resultado = cursor.fetchone()
                id_capitulo = resultado[0] if resultado else None
                break  # Pula a detecção de título, continua pegando o texto completo da página

            i += 1

        # Só insere páginas a partir do primeiro capítulo
        if historia_comecou and id_capitulo:
            # Insere o texto completo da página exatamente como está
            cursor.execute(
                "INSERT INTO pagina (texto, numero, id_capitulo) VALUES (%s, %s, %s)",
                (text, pagina_global, id_capitulo)
            )

conn.commit()
cursor.close()
conn.close()
