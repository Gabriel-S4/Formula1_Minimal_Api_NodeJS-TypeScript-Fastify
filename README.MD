# API de Times e Pilotos de Fórmula 1 (Fastify)

Este projeto é uma **API simples em Node.js usando Fastify**, criada para fins de estudo e prática. Ela disponibiliza endpoints para listar **times** e **pilotos de Fórmula 1**, além de buscar um piloto específico pelo `id`.

---

## Tecnologias Utilizadas

* **Node.js**
* **Fastify** – Framework web rápido e leve
* **@fastify/cors** – Controle de CORS
* **TypeScript** (tipagem utilizada nos parâmetros)

---

## Estrutura do Projeto (exemplo)

```bash
project
├── src
│   └── server.ts
├── package.json
├── tsconfig.json
└── README.md
```

---

## Instalação das Dependências

### 1 - Clone o repositório

```bash
git clone <url-do-repositorio>
cd nome-do-projeto
```

### 2 - Instale as dependências

Usando **npm**:

```bash
npm install
```

Ou usando **yarn**:

```bash
yarn install
```

### Dependências principais

```bash
npm install fastify @fastify/cors
```

Se estiver usando TypeScript:

```bash
npm install -D typescript ts-node @types/node
```

---

## Configuração do Ambiente

Esta API utiliza a variável de ambiente `PORT` para definir a porta do servidor.

### Exemplo (Linux / macOS)

```bash
export PORT=3333
```

### Exemplo (Windows – PowerShell)

```powershell
$env:PORT=3333
```

---

## Como Executar o Projeto

### Usando Node.js

```bash
node src/server.js
```

### Usando TypeScript com ts-node

```bash
npx ts-node src/server.ts
```

Ao iniciar corretamente, o terminal exibirá:

```bash
Servidor Iniciado na Porta 3333
```

---

##  Configuração de CORS

O CORS está configurado para permitir requisições do domínio:

```ts
origin: "127.0.0.1:3333"
```

Você pode alterar para:

* Permitir qualquer origem:

```ts
origin: "*"
```

* Permitir múltiplos domínios:

```ts
origin: ["gabrielsadev.com.br", "outrosite.com"]
```

---

##  Endpoints Disponíveis

###  Listar todos os times

**GET** `/teams`

**Resposta:**

```json
{
  "teams": [
    {
      "id": 1,
      "name": "McLaren",
      "base": "Woking, United Kingdom"
    }
  ]
}
```

---

###  Listar todos os pilotos

**GET** `/drivers`

**Resposta:**

```json
{
  "drivers": [
    {
      "id": 1,
      "name": "Max Verstappen",
      "team": "Red Bull Racing"
    }
  ]
}
```

---

###  Buscar piloto por ID

**GET** `/drivers/:id`

**Exemplo:**

```bash
GET /drivers/1
```

**Resposta de sucesso (202):**

```json
{
  "drive": {
    "id": 1,
    "name": "Max Verstappen",
    "team": "Red Bull Racing"
  }
}
```

**Resposta de erro (404):**

```json
{
  "message": "Driver not found"
}
```

---

## Observações Importantes

* Os dados estão armazenados **em memória** (arrays), sem banco de dados
* Ideal para estudos de:

  * Fastify
  * Rotas
  * Parâmetros de URL
  * Tipagem com TypeScript
  * Configuração de CORS