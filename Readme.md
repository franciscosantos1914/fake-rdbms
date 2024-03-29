## Fake RDBMS

### Sobre

Esta aplicação Node.js permite a manipulação de consultas SQL de forma dinâmica, convertendo-as em operações em uma base de dados em memória. A aplicação suporta operações de `INSERT` e `SELECT`, e interage com o usuário através de uma interface de linha de comando (CLI) usando a biblioteca `prompt-sync`.

### Características Principais

- **Manipulação de Consultas SQL**: A aplicação aceita consultas SQL do tipo `INSERT` e `SELECT`, convertendo-as em operações na base de dados em memória.
- **Base de Dados em Memória**: Utiliza um objeto JavaScript como base de dados em memória, permitindo operações rápidas e eficientes.
- **Interface de Linha de Comando (CLI)**: Interage com o usuário através de uma CLI, utilizando a biblioteca `prompt-sync` para receber e apresentar informações.

### Como Usar

1. **Instalação**:
   - Clone o repositório.
   - Execute `npm install` para instalar as dependências.

2. **Execução**:
   - Inicie a aplicação com `npm run start`.
   - A CLI solicitará que você insira uma consulta SQL.

3. **Operações Suportadas**:
   - **INSERT**: Para inserir dados na base de dados em memória, insira uma consulta SQL do tipo `INSERT`. 
  <br /> Por exemplo: `INSERT INTO users (name, age) VALUES ('John Doe', 30)`.
   - **SELECT**: Para recuperar dados da base de dados em memória, insira uma consulta SQL do tipo `SELECT`. 
  <br /> Por exemplo: `SELECT * FROM users WHERE age > 25`.

### Exemplos de Uso

- **Inserir Dados**:
`INSERT INTO users (name, age) VALUES ('Jane Doe', 28)`
- **Recuperar Dados**:
`SELECT * FROM users WHERE age > 25`


### Considerações de Segurança

- A aplicação não realiza validações de entrada ou escapes de strings, portanto, é importante garantir que as consultas SQL inseridas sejam seguras para evitar ataques de injeção SQL.
