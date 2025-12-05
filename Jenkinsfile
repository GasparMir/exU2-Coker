pipeline {
    agent any

    environment {
        COMPOSE_PROJECT_NAME = 'exu2-jgml'

    }

    stages {
        stage('Parando y eliminando servicios anteriores...') {
            steps {
                bat '''
                    docker compose -p %COMPOSE_PROJECT_NAME% down || exit /b 0
                '''
            }
        }

        stage('Eliminando imágenes anteriores...') {
            steps {
                bat '''
                    for /f "tokens=*" %%i in ('docker images --filter "label=com.docker.compose.project=%COMPOSE_PROJECT_NAME%" -q') do (
                        docker rmi -f %%i
                    )
                    if errorlevel 1 (
                        echo No hay imagenes por eliminar
                    ) else (
                        echo Imagenes eliminadas correctamente
                    )
                '''
            }
        }

        stage('Obteniendo actualización...') {
            steps {
                checkout scm
            }
        }

        stage('Construyendo y desplegando servicios...') {
            steps {
                bat '''
                    docker compose -p %COMPOSE_PROJECT_NAME% up --build -d
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline ejecutado con éxito'
        }

        failure {
            echo 'Hubo un error al ejecutar el pipeline'
        }

        always {
            echo 'Pipeline finalizado'
        }
    }
}