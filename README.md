# Filtro de Pessoas - Angular Material

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

Este projeto é uma aplicação Angular que permite a filtragem de usuários em uma tabela utilizando Angular Material. O usuário pode visualizar detalhes de cada pessoa ao clicar em uma linha da tabela e pode filtrar a listagem com base no nome, intervalo de data de cadastro e status (ativo/inativo).

## 🚀 Tecnologias Utilizadas
- **Angular** (Framework principal)
- **Angular Material** (Componentes visuais)
- **TypeScript** (Linguagem de programação)
- **SCSS** (Estilização)

## 🎯 Funcionalidades
- Exibir uma tabela de usuários com **Nome**, **Data de Cadastro** e **Status** (Ativo/Inativo).
- Filtrar usuários por **nome**, **intervalo de datas** e **status**.
- Exibir **detalhes do usuário** ao clicar em uma linha da tabela.

## 🔧 Como Rodar o Projeto
1. **Clone este repositório:**
   ```sh
   git clone https://github.com/sabiss/filtroDeUsuariosAngular
   ```
2. **Acesse a pasta do projeto:**
   ```sh
   cd filtroDeUsuariosAngular
   ```
3. **Instale as dependências:**
   ```sh
   npm install
   ```
4. **Inicie o servidor de desenvolvimento:**
   ```sh
   ng serve
   ```
5. **Acesse a aplicação no navegador:**
   ```
   http://localhost:4200/
   ```

## 📌 Notas Importantes
- Certifique-se de ter o **Node.js** e o **Angular CLI** instalados.
- Para instalar o Angular CLI, use:
  ```sh
  npm install -g @angular/cli
  ```
- O projeto utiliza o **Angular Material**, então o módulo de animações deve estar incluído:
  ```ts
  import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
  ```

