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
fim_notas = False

with pdfplumber.open(pdf_path) as pdf:
    for page in pdf.pages:
        if fim_notas:
            break  # termina após notas

        pagina_global += 1
        text = page.extract_text()
        if not text:
            continue

        linhas = [linha.strip() for linha in text.split("\n")]
        i = 0
        buffer_paragrafo = []

        while i < len(linhas):
            linha = linhas[i]

            # Detecta fim do conteúdo relevante
            if linha.lower() == "notas":
                fim_notas = True
                break

            # Detecta título de capítulo mesmo com quebra de linha
            # Vamos tentar combinar a linha atual + próxima (+ próxima da próxima)
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
                # pega id do capítulo
                cursor.execute("SELECT id FROM capitulo WHERE nome = %s", (cap_encontrado,))
                resultado = cursor.fetchone()
                id_capitulo = resultado[0] if resultado else None

                # pula as linhas do título detectado
                linhas_para_pular = len(cap_encontrado.split())
                i += linhas_para_pular
                continue

            # Se não começou a história ainda, ignora
            if not historia_comecou or id_capitulo is None:
                i += 1
                continue

            # Adiciona linha ao buffer de parágrafo
            if linha and not linha.isdigit() and "Alice no País" not in linha:
                buffer_paragrafo.append(linha)
            else:
                # linha vazia ou cabeçalho = fim do parágrafo
                if buffer_paragrafo:
                    paragrafo = " ".join(buffer_paragrafo).strip()
                    cursor.execute(
                        "INSERT INTO pagina (texto, numero, id_capitulo) VALUES (%s, %s, %s)",
                        (paragrafo, pagina_global, id_capitulo)
                    )
                    buffer_paragrafo = []

            i += 1

        # salva último parágrafo da página
        if buffer_paragrafo:
            paragrafo = " ".join(buffer_paragrafo).strip()
            cursor.execute(
                "INSERT INTO pagina (texto, numero, id_capitulo) VALUES (%s, %s, %s)",
                (paragrafo, pagina_global, id_capitulo)
            )

conn.commit()
cursor.close()
conn.close()
