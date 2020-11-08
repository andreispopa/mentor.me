FROM node:15-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --no-optional
COPY . .
RUN npm run build

COPY wait-for.sh ./
RUN chmod +x wait-for.sh