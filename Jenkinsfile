pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('checkout'){
            steps{
                
                
                
                    sh " ls "
                
              
            }
        }
        stage("Commit id"){
            steps {
                script {
                    env.COMMIT = sh(script: 'git rev-parse --short HEAD',returnStdout:true).trim()
                }
            }
        }
        stage("Dummy"){
            steps{
                sh """
                    echo ${env.COMMIT}
                """
            }
        }
    }
    post {
        always {
                cleanWs()
                echo "Workspace cleaned !"            
        }
    }
}
