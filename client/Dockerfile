# Etapa 1: BUILD
FROM node:20 AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Comando de compilación
RUN npm run build

# Etapa 2: PRODUCTION (Nginx)
FROM nginx:alpine

# Copia la configuración de Nginx (requerida para SPA)
COPY ./nginx.conf /etc/nginx/nginx.conf 

# Copia los archivos estáticos compilados (desde la etapa 'build')
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]