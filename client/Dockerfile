# Etapa 1: BUILD (Usar imagen node estándar, NO ALPINE)
FROM node:20 AS build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build


# Etapa 2: PRODUCTION (Nginx Alpine para un contenedor final ligero)
FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]