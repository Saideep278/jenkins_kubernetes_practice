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
                    env.BRANCH = sh(script: 'git rev-parse --abbrev-ref HEAD',returnStdout:true).trim()
                }
            }
        }
        stage("Dummy"){
            steps{
                sh """
                    echo ${env.COMMIT}
                    echo ${env.BRANCH}
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
