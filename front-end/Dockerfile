FROM node:20-apline As build
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY ..
RUN npm run build

# production stage 
FROM nginx:alpine
# Copy the build files that builds to the nginx 
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 82
CMD ["nginx","-g","daemon off;"]
