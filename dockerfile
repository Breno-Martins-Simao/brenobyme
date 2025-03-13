# Use a imagem oficial do Node.js como base
FROM node:23

# Defina o diretório de trabalho
WORKDIR /app

# Copie o pacote `package*.json` para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código do projeto para o diretório de trabalho
COPY . .

# Exponha a porta 8000
EXPOSE 8000

RUN ls

# Defina o comando para buildar o projeto
RUN npm run build

# Defina o comando para executar o projeto
CMD ["npm", "run", "start"]