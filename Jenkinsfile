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
    
stage('Build Backend') { 
steps {
echo 'Building Backend'
dir('backend'){
bat 'npm install'
  }
}
}
}
}
