pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/Vamsi-2005/Devops.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'sudo docker build -t devops-app .'
            }
        }

        stage('Run Container') {
            steps {
                sh '''
                sudo docker stop devops-app || true
                sudo docker rm devops-app || true
                sudo docker run -d --name devops-app -p 3000:3000 devops-app
                '''
            }
        }
    }
}