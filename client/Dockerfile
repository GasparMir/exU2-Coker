# Etapa 1: BUILD (Compilación limpia y completa)
FROM node:20 AS build
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

# Etapa 2: PRODUCTION (Nginx)
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/nginx.conf 
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]