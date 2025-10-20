pipeline{
  agent any 

  tools {
    nodejs 'NodeJS_Home'
  }


  stages{
// Build Frontend 
  stage('Build Frontend'){
steps {
echo 'Building Frontend'
dir('front-end'){
bat 'npm install'
  }
  
}
 }
   // Building Backend 
  stage('Build Backend') { 
steps {
echo 'Building Backend'
dir('backend'){
bat 'npm install'
  }
}
}

    stage('Testing Frontend'){
      steps {
        echo 'Ruuning Frontend Testing'
        dir('front-end'){
          bat 'npm install rimraf -g'
          bat 'rimraf node_modules'
          bat 'npm install -D jsdom'
           bat 'npm install --save-dev @testing-library/react'
          bat 'npx vitest run'
        }
      }
    }

    stage('Deploy'){
step {
withCredentials([string(credentialsId: 'docker-pwd', variable: 'Docker-Hub')]) {
bat "docker login -u dhineshdine -p ${Docker-Hub}"

  dir('front-end'){
  bat 'docker build -t dhineshdine/twitter-frontend-jenkins:latest'
  bat 'docker push dhineshdine/twitter-frontend-jenkins:latest'

  dir('backend'){
  bat 'docker build -t dhineshdine/twitter-backend-jenkins:latest'
  bat 'docker push dhineshdine/twitter-backend-jenkins:latest'
  }

  }
}
}

    }
    
}
}
