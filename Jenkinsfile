pipeline {
  agent {
    docker {
      image 'node:12.18.2-alpine3.9'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

    stage('Deploy') {
      steps {
        sh 'npm start'
      }
    }

  }
}