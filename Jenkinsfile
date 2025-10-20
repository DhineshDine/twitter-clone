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
          bat 'rm -rf node_modules'
          bat 'npm install --include=dev'
          bat 'npm test'
        }
      }
    }
    
}
}
