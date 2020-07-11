pipeline {
  agent any
  stages {
    stage('git clone') {
      steps {
        git(branch: 'master', url: 'https://github.com/ERP-Dev-Team/BackEnd.git')
        bat 'cd BackEnd'
      }
    }

    stage('install dependencies') {
      steps {
        bat 'npm install'
      }
    }

    stage('deploy') {
      steps {
        bat 'npm start'
      }
    }

  }
}