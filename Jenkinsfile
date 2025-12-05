// Pipeline para construir y desplegar la aplicación usando Docker Compose
pipeline {
    agent any

    environment {
        // Nombre del proyecto/stack de Docker Compose (requerido)
        COMPOSE_PROJECT_NAME = 'exu2-jgm'
        // Etiqueta de la imagen (requerida)
        IMAGE_TAG = 'v1.0.2'
    }

    stages {
        stage('Checkout') {
            steps {
                // Obtener el código del repositorio (requiere que el job esté configurado con SCM)
                checkout scm
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    echo "Building client image..."
                    // Construir la imagen del cliente sin cache
                    sh "docker build --no-cache -t client:${IMAGE_TAG} ./client"
                    
                    echo "Building operations image..."
                    // Construir la imagen del servidor sin cache
                    sh "docker build --no-cache -t operations:${IMAGE_TAG} ./server"
                }
            }
        }

        stage('Deploy to Docker') {
            steps {
                script {
                    echo "Deploying stack with name: ${COMPOSE_PROJECT_NAME}"
                    // Levantar los servicios con el archivo docker-compose.yml
                    // Se usa el nombre del proyecto definido en el environment
                    sh "docker compose -p ${COMPOSE_PROJECT_NAME} -f docker-compose.yml up --build -d"
                }
            }
        }
    }
}