# React Router Projeto - Busca de Itens

Este é um projeto React com uso do **React Router v6** e **JSON Server** para simular uma API REST. O objetivo é praticar rotas dinâmicas e navegação entre páginas, além de manipulação de dados com um servidor local.

## 📁 Estrutura de Pastas

📁 data/ → Contém o arquivo db.json com os dados mockados.
📁 public/ → Arquivos públicos da aplicação.
📁 src/
┣ 📁 components/ → Componentes reutilizáveis como Navbar e SearchForm.
┣ 📁 hooks/ → Custom hook useFetch para busca de dados.
┣ 📁 pages/ → Páginas principais do projeto.
┣ App.js → Componente principal da aplicação.
┣ index.js → Ponto de entrada da aplicação React.


## 🚀 Tecnologias Utilizadas

- React
- React Router DOM v6
- JSON Server
- CSS Modules
- Hooks (useEffect, useState)

## 🧪 Como executar

### 1. Clone o repositório
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

2. Instale as dependências
npm install
3. Inicie o JSON Server
Certifique-se de que o json-server está instalado globalmente ou localmente:

# Instalação global
npm install -g json-server

# Inicie o servidor
json-server --watch data/db.json --port 3001
O servidor irá rodar em: http://localhost:3001

4. Inicie a aplicação React
npm start
A aplicação irá rodar em: http://localhost:3000

🧭 Funcionalidades
Navegação entre páginas com React Router

Busca dinâmica de dados (via URL)

Componentização e reutilização

Hook personalizado (useFetch) para requisições

📝 Autor
Diovanni Lucas Soares de Paula
Estudante de Desenvolvimento de Software Multiplataforma - FATEC Diadema

Este projeto foi desenvolvido como parte dos meus estudos de front-end com React e práticas com rotas e API REST, com base no curso "React do zero a maestria" de Matheus Battisti.
