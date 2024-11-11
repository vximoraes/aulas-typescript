# ⚙️ Comandos utilizados para preparar o ambiente de desenvolvimento em TypeScript
Sempre rodar o ```npm install``` nos projetos clonados para instalar todas as dependências necessárias.

## 📥 Instalando o Node Version Manager (NVM)
### ⬇️ Baixar e instalar o NVM:  
```bash 
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/
```

### 📃 Listar versões do Node disponíveis: 
```bash 
nvm list-remote
```

### ⬇️ Instalar o Node 20 LTS:
```bash 
nvm install v20.0.0
```

### 🔍 Verificar a versão instalada:
```bash 
node -v
```

## 📥 Instalando o TypeScript
### ⬇️ Instalar o TypeScript:
```bash 
npm install -g typescript
```

### 🔍 Verificar a versão instalada:
```bash 
tsc -v
```

## 📥 Instalando o Nodemon
- ⬇️ Instalar o Nodemon
```bash 
npm install -g nodemon
```

## 💻 Criando o projeto TypeScript
- 📁 Ir até o diretório do projeto.
- ```bash
  npm init -y
  ```
- ```bash
  npm install ts-node
  ```
- ```bash
  tsc --init
  ```

## 🗂️ Criando pastas importantes
- ```bash
  mkdir dist
  ```
- ```bash
  mkdir src
  ```

## 🔧 Configuração o package.json
```bash
  "scripts": {
  "dev": "nodemon src/index.ts",
  "start": "node dist/index.js",
  "build": "tsc"
}
  ```

## 🔧 Configuração do tsconfig.json
```bash
  "outDir": "./dist"
  ```
```bash
  "noEmitOnError": true
  ```
```bash
  "strict": true
  ```
```bash
  "noUnusedLocals": true
  ```
```bash
  "noUnusedParameters": true
  ```
```bash
  "noImplicitReturns": true
  ```


## 🏃‍♂️ Executando o projeto
### 🛠️ Em desenvolvimento: 
```bash
  npm run dev
  ```

### 🏗️ Criando o build:
```bash
  npm run build
  ```

### 🚀 Executando o projeto (em produção):
```bash
  npm start
  ```
