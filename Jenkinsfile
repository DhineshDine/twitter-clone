pipeline {
    agent any

    tools {
        nodejs 'NodeJS_Home'
    }

    stages {
        // 1. Build Frontend
        stage('Build Frontend') {
            steps {
                echo 'Building Frontend'
                dir('front-end') {
                    bat 'npm install'
                }
            }
        }

        // 2. Build Backend
        stage('Build Backend') {
            steps {
                echo 'Building Backend'
                dir('backend') {
                    bat 'npm install'
                }
            }
        }

        // 3. Testing Frontend
        stage('Testing Frontend') {
            steps {
                echo 'Running Frontend Testing'
                dir('front-end') {
                    // Optimized: Only run tests; no need to delete/reinstall if build stage passed
                    bat 'npx vitest run'
                }
            }
        }

        // 4. Build Docker Images
        stage('Building Docker Images') {
            steps {
                echo 'Building Images'
                // Tagging with username is REQUIRED to push to Docker Hub
                dir('front-end') {
                    bat 'docker build -t dhineshdine/twitter-clone-frontend .'
                }
                dir('backend') {
                    bat 'docker build -t dhineshdine/twitter-clone-backend .'
                }
            }
        }

        // 5. Deploy to Docker Hub
        stage('Deploy to Docker Hub') {
            steps {
                echo 'Deploying to Docker Hub'
                withCredentials([string(credentialsId: 'DOCKER_PWD', variable: 'Docker_PWD')]) {
                    bat 'docker login -u dhineshdine -p %Docker_PWD%'
                    bat 'docker push dhineshdine/twitter-clone-frontend'
                    bat 'docker push dhineshdine/twitter-clone-backend'
                }
            }
        }
    }
}