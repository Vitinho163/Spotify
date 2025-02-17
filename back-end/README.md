<h1 align="center">Spotify Replica (Simplificado) - Back-End</h1>

<div align="center">
  <a href="#english">English</a> |
  <a href="#portugues">Português</a>
</div>

---

# English <a name="english"></a>

**Spotify Replica (Simplificado) - Back-End** is the back-end service for a simplified Spotify clone, built with JavaScript, Node.js, Express, and MongoDB. This project uses ES Modules, dotenv for managing environment variables, and the Node.js path module to handle file paths. The back-end handles the database connection, data insertion, and serves the API endpoints.

## Directory Structure
```
/api
  ├── connect.js          # Manages the connection to the MongoDB database.
  ├── insertMany.js       # SScript used solely to insert data into the database.
  └── server.js           # Main API server file.
.example.env              # Example file; rename to .env and provide your MongoDB URI.
```

## 🚀 Technologies Used

- **[Node.js](https://nodejs.org/)**: JavaScript runtime environment.
- **JavaScript (ES Modules)**: Modern module system for JavaScript.
- **[Express](https://expressjs.com/)**: Web framework for Node.js.
- **[MongoDB](https://www.mongodb.com/)**: NoSQL database.
- **[dotenv](https://github.com/motdotla/dotenv)**: Loads environment variables from a .env file.
- **[Path](https://nodejs.org/api/path.html)**: Node.js module for handling file paths.

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Vitinho163/Spotify.git
   ```

2. **Navigate to the back-end directory:**
   ```bash
   cd Spotify/back-end
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Configure Environment Variables:**
- Rename the ``.example.env`` file to ``.env``.
- Open the ``.env`` file and set your MongoDB connection URI in the ``MONGO_URI`` variable.

5. **Start the server:**
   ```bash
   npm run start
   ```

The API will be accessible at http://localhost:3000 (or the port specified in your server configuration).

## 📥 Data Insertion

- To insert initial data into the database, run:
```bash
 node .\api\insertMany.js
```

## 💻 Deploy <a name="deploy-en"></a>

The back-end is hosted online on Render. You can access the deployed application at:
```
https://spotify-soqr.onrender.com/
```

<div align="center" name="author-en"> 
  <h4>Created with ❤️ by <a href="https://github.com/Vitinho163">Vitinho163</a></h4> 
</div>

---

# Português <a name="portugues"></a>

**Spotify Replica (Simplificado) - Back-End** é o serviço back-end para uma réplica simplificada do Spotify, desenvolvido com JavaScript, Node.js, Express e MongoDB. Este projeto utiliza ES Modules, dotenv para gerenciar variáveis de ambiente e o módulo path do Node.js para manipulação de caminhos. O back-end é responsável por conectar ao banco de dados, inserir dados e servir os endpoints da API.

## Estrutura de Diretórios
```
/api
  ├── connect.js          # Gerencia a conexão com o banco de dados MongoDB.
  ├── insertMany.js       # Script usado apenas para inserir os dados no banco de dados.
  └── server.js           # Arquivo principal do servidor da API.
.example.env              # Exemplo do arquivo de ambiente; renomeie para .env e insira sua URI do MongoDB.
```

## 🚀 Tecnologias Utilizadas

- **[Node.js](https://nodejs.org/)**: Ambiente de execução para JavaScript.
- **JavaScript (ES Modules)**: Sistema moderno de módulos para JavaScript.
- **[Express](https://expressjs.com/)**: Framework web para Node.js.
- **[MongoDB](https://www.mongodb.com/)**: Banco de dados NoSQL.
- **[dotenv](https://github.com/motdotla/dotenv)**: Carrega variáveis de ambiente a partir do arquivo .env.
- **[Path](https://nodejs.org/api/path.html)**: Módulo do Node.js para manipulação de caminhos de arquivos.

## 🛠️ Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Vitinho163/Spotify.git
   ```

2. **Navegue até o diretório do back-end:**
   ```bash
   cd Spotify/back-end
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure as Variáveis de Ambiente:**
- Rename the ``.example.env`` file to ``.env``.
- Open the ``.env`` file and set your MongoDB connection URI in the ``MONGO_URI`` variable.

5. **Inicie o servidor:**
   ```bash
   npm run start
   ```

A API ficará acessível em http://localhost:3000 (ou na porta definida na configuração do servidor).

## 📥 Inserção de Dados

- Para inserir os dados iniciais no banco, execute:
```bash
 node .\api\insertMany.js
```

## 💻 Deploy <a name="deploy-pt"></a>

O back-end está hospedado online na Render. Você pode acessar a aplicação no seguinte endereço:
```
https://spotify-soqr.onrender.com/
```

<div align="center" name="author-en"> 
  <h4>Criado com ❤️ por <a href="https://github.com/Vitinho163">Vitinho163</a></h4> 
</div>