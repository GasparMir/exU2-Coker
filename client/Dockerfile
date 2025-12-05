# ETAPA 1: BUILD
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run build

# --- ETAPA 2: PRODUCTION (Nginx) ---
FROM nginx:alpine

RUN rm -rf /etc/nginx/conf.d/* # Copia tu archivo nginx.conf (ya simplificado)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf 
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80