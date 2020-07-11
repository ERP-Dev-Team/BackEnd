pipeline {
  agent any
  stages {
    stage('git clone') {
      steps {
        git(branch: 'master', url: 'https://github.com/ERP-Dev-Team/BackEnd.git')
        bat 'cd BackEnd'
      }
    }

    stage('curren') {
      steps {
        pwd()
      }
    }

  }
}