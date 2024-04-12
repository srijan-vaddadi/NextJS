pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Sonarqube Analysis') {
            steps {
                script {
                    def scannerhome = tool 'SonarQube';
                    withSonarQubeEnv("Srijan's Sonarcloud") {
                        sh "${scannerHome}/bin/sonar-scanner"
                    }
                }
            }
        }
    }
}