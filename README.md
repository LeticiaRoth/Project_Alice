# Tutorial para Inicialização do Projeto

## Softwares necessários:
### Python
  - Link de instalação: https://www.python.org/downloads/release/python-3135/
  - Instale a versão 3.13.5
  - Lembre-se de selecionar a opção de adicionar o python nas variáveis de ambiente ou adicione manualmente

### MySQL 
  - Link de instalação: https://dev.mysql.com/downloads/windows/installer/8.0.html
  - Versão: 8.0.43
  - SO: Microsoft Windows
  - Instalador: Windows (x86, 32-bit), MSI Installer (mysql-installer-community-8.0.43.0.msi) (Normalmente é a segunda opção)
  - Atenção!!! Na instalação selecione a opção que instale todo o MySQL(tanto client como server) e crie um usuário "root" e coloque uma senha no usuário "root" que seja fácil de lembrar (indicamos "root" também), você terá de utiliza-la depois!
  - Certifique-se de que a conexão está sendo utilizada na porta 3306

### Intellij
  - Link de instalação: https://www.jetbrains.com/idea/download/?section=windows
  - Selecione a opção "Community", ela estará um pouco para baixo da página
  - Quando estiver instalando e tiver a opção de "Create Associations", selecione todas as opções dessa sessão

### Visual Studio Code
  - Link de instalação: https://code.visualstudio.com/download

## Iniciando o projeto
### MySQL
  - Utilize o comando: create database chapeleiro;

### Intellij
  - Selecione a opção "Open Project" e abra a pasta "chapeleiro" que está no repositório do projeto
  - Abra o arquivo "application.properties" em: "src/main/resources/application.properties"
  - Confira se o usuário (spring.datasource.username=root) e a senha (spring.datasource.password=root) nas linhas 3 e 4 são os mesmos que você configurou no MySQL, se não for, altere-os para os mesmos que você configurou na criação de conexão do banco de dados
  - Agora abra o arquivo "ChapeleiroApplication" em: "src/main/java/br/com/chapeleiro/chapeleiro/ChapeleiroApplication.java" e inicialize ele
  - Ele deu erro, mas não se preocupe, isso aconteceu por causa do Java. No Intellij aparecerá um alerta após a tentativa de inicialização pedindo para instalar o 
