pipeline{
    agent {
        node {
            label "stg"
        }
    }
    stages {
        stage("Build"){
            steps{
                echo 'BUILD EXECUTION STARTED'
                sh "sudo su root"
                sh "whoami"
                npm "install"
                npm "run build"
            }
        }
        stage("Deploy"){
            steps{
                echo 'DEPLOY EXECUTION STARTED'
                sh "sudo mkdir -p /var/www/admin && sudo cp -a build/. /var/www/admin/"
            }
        }
    }
}