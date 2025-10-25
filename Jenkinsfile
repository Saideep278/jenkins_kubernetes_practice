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
                
                checkout scm
                steps {
                    sh " ls "
                }
                // sh """
                //     git clone https://github.com/Saideep278/jenkins_kubernetes_practice.git
                //     cd jenkins_kubernetes_practice
                //     ls
                // """
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
                    echo ${COMMIT}
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
