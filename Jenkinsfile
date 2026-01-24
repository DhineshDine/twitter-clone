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
          bat 'npm install'
          bat 'npx vitest run'
        }
      }
    }

    stage('Building frontend Image'){
      steps {
        echo 'Building Frontend Image'
        dir('front-end'){
          bat 'docker build -t twitter-clone-frontend .'
        }
        }
        }
    stage('Building Backend Image'){
      steps {
        echo 'Building Backend Image'
        dir('backend'){
          bat 'docker build -t twitter-clone-backend .'

        }
      }
    }
    

    stage('Deploy to Docker Hub'){
      steps {
        echo 'Deploying to Docker Hub'
        withCredentials([string(credentialsId: 'DOCKER_PWD', variable: 'Docker_PWD')]) {
          bat 'docker login -u dhineshdine -p %Docker_PWD%'
          bat 'docker push twitter-clone-frontend'
          bat 'docker push twitter-clone-backend'

          }
      }
    }
    
    
}
}

