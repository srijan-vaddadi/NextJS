pipeline {
    agent any
    tools {
        nodejs "NodeJS"
    }
    stages {
        stage('Dependancies') {
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
                        sh "${scannerhome}/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Build') {
            steps {
                sshagent (credentials: (['SrijanEC2Cred'])){
                sh("ssh -o StrictHostKeyChecking=no ubuntu@13.51.72.214 'rm -rf NextJS && git clone https://github.com/srijan-vaddadi/NextJS.git && cd NextJS && npm ci && sudo npm run dev -- -p 80 -H 0.0.0.0'")
                }
            }
        }
    }
}