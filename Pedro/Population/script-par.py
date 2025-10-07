import mysql.connector
import pdfplumber

# Conexão com o banco
conn = mysql.connector.connect(
    host="localhost",
    user="root",
    password="1234",
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
fim_notas = False  # flag para parar após notas

with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        if fim_notas:
            break  # termina a leitura após "Notas"

        pagina_global += 1
        text = page.extract_text()
        if not text:
            continue

        linhas = text.split("\n")
        novas_linhas = []
        i = 0

        while i < len(linhas):
            linha = linhas[i].strip()

            # Detecta fim do conteúdo relevante
            if linha.lower() == "notas":
                fim_notas = True
                break

            # Detecta título de capítulo
            if linha in titulos_capitulos:
                historia_comecou = True
                cursor.execute("SELECT id FROM capitulo WHERE nome = %s", (linha,))
                resultado = cursor.fetchone()
                id_capitulo = resultado[0] if resultado else None
                i += 1  # pula a linha do título
                continue

            # Se não começou a história ainda, ignora (prefácio, sumário, capa)
            if not historia_comecou or id_capitulo is None:
                i += 1
                continue

            # Adiciona apenas linhas de narrativa, ignorando rodapés/cabeçalhos/números
            if linha and not linha.isdigit() and "Alice no País" not in linha:
                novas_linhas.append(linha)

            i += 1

        texto_final = " ".join(novas_linhas).strip()
        if texto_final:
            cursor.execute(
                "INSERT INTO pagina (texto, numero, id_capitulo) VALUES (%s, %s, %s)",
                (texto_final, pagina_global, id_capitulo)
            )

conn.commit()
cursor.close()
conn.close()
