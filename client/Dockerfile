FROM node:alpine as build-step

WORKDIR /app

COPY package*.json ./
RUN npm install --no-optional
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build-step /app/build /usr/share/nginx/html