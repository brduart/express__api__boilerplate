# ExpressJS API Boilerplate

Este repositório é um **boilerplate** para desenvolvimento de uma API utilizando **ExpressJS**. Ele fornece uma estrutura básica e organizada para iniciar rapidamente o desenvolvimento de APIs, seguindo as melhores práticas e padrões de código.

## 📋 Índice

- [Sobre](#sobre)
- [Tecnologias](#tecnologias)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Como Usar](#como-usar)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Contribuindo](#contribuindo)

## 📝 Sobre

Este boilerplate foi criado para ajudar desenvolvedores a começar rapidamente o desenvolvimento de APIs com **ExpressJS**. Ele inclui exemplos de configuração de rotas, middlewares, e uma estrutura de pastas bem definida para organização do código.

## 🛠️ Tecnologias

- **Node.js**
- **ExpressJS**
- **Typescript**
- **Ts-Node** (typescript exec)
- **ES Modules**
- **Nodemon** (desenvolvimento automático)
- **Dotenv** (variáveis de ambiente)
- **Cors** (middleware CORS)
- **Morgan** (logs HTTP)
- **Zod** (validação)
- **PassportJS** (autenticação e autorização)
- **Helmet** (segurança)
- **Express Rate Limit** (rate limit)
- **Bcrypt** (hashing)
- **PrismaORM/Postgres** (ORM + PostgreSQL)

## 📂 Estrutura do Projeto

```bash
📦 express__api__boilerplate
├── 📁 prisma
│   └── schema.prisma     # Inicialização do servidor
├── 📁 src
│   ├── 📁 controllers    # Controladores para lógica de negócio
│   ├── 📁 middlewares    # Middlewares personalizados
│   ├── 📁 routes         # Definição de rotas
│   ├── 📁 schemas        # Schemas para validação de dados
│   ├── 📁 services       # Serviços para lógica de negócio
│   ├── 📁 utils          # Utilitários e funções auxiliares
│   └── server.ts        # Inicialização do servidor
├── .env.example         # Exemplo de variáveis de ambiente
├── .gitignore           # Arquivos ignorados pelo Git
├── Dockerfile           # Criação da imagem Docker
├── nodemon.json         # Configuração do nodemon
├── package-lock.json    # Dependências e scripts
├── package.json         # Dependências e scripts
├── tsconfig.json        # Configuração do typescript
└── README.md            # Documentação do projeto
```
## ⚙️ Pré-requisitos

    Node.js (v14 ou superior)
    npm ou yarn
    
## 📦 Instalação

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/brduart/express__api__boilerplate.git
```

Navegue até o diretório do projeto:

```bash
cd express__api__boilerplate
```

Instale as dependências:

```bash
npm install
# ou
yarn install

```

## 🚀 Como Usar
1. Copie o arquivo `.env.example` e renomeie para `.env`. Configure as variáveis de ambiente conforme necessário.
2. Inicie o servidor em ambiente de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```
3. A API estará disponível em http://localhost:PORTA.

## 📜 Scripts Disponíveis

- `dev`: Inicia o servidor com Nodemon para desenvolvimento.
- `build`: Inicia o build do projeto
- `start`: Inicia o servidor em produção
- `migrate:dev`: Inicia a migration do prisma em modo de desenvolvimento.
- `migrate:deploy`: Inicia a migration do prisma em modo de produção.

## 🤝 Contribuindo
Contribuições são bem-vindas! Se você tiver ideias para melhorar este boilerplate ou encontrar problemas, fique à vontade para abrir uma issue ou enviar um pull request.
