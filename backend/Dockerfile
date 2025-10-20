FROM node:20-alpine

WORKDR : /usr/src/app

COPY package*.json ./

RUN npm install 
COPY . .
EXPOSE 5000
CMD ["npm","start"]
