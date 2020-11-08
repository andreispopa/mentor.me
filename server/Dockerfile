FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

COPY wait-for.sh ./
RUN chmod +x wait-for.sh