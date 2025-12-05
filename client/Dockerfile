# Crea la imagen a partir de un nginx de alpine
FROM nginx:alpine

# Elimina todos los archivos por defecto que tiene la imagen
RUN rm -rf /usr/share/nginx/html/*

# Copia mi proyecto en la carpeta compartida de nginx
COPY . /usr/share/nginx/html

# Expon la imagen en puerto 80
EXPOSE 80