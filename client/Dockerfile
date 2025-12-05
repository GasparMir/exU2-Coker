# Etapa 1: BUILD (Usar imagen node estándar, NO ALPINE)
FROM node:20 AS build
WORKDIR /app

# Copiamos package.json y package-lock.json para optimizar el cache y la instalación limpia
COPY package.json ./
COPY package-lock.json ./

# Usamos 'npm ci' para una instalación limpia y determinista
RUN npm ci

# Copiamos el resto del código fuente
COPY . .

# Comando de compilación
RUN npm run build

# Etapa 2: PRODUCTION (Nginx Alpine para un contenedor final ligero)
FROM nginx:alpine

# Copia la configuración de Nginx (requerida para SPA)
COPY ./nginx.conf /etc/nginx/nginx.conf 

# Copia los archivos estáticos compilados (desde la etapa 'build')
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]