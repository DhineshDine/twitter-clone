FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build

# production stage 
FROM nginx:alpine
# Copy the build files that builds to the nginx 
COPY --from=build /app /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx","-g","daemon off;"]
