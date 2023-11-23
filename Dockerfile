## ECR에서 테스트할 때 용량 에러
# Build stage
# FROM node:18 as build-stage
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .
# RUN npm run build

# Production stage
# FROM nginx:stable-alpine as production-stage
# COPY --from=build-stage /app/build /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

## ECR 용 
# Production stage
# FROM nginx:stable-alpine as production-stage
# WORKDIR /usr/share/nginx/html
# COPY ./build .
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# 배포용
FROM node:alpine as builder
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build

FROM nginx 
EXPOSE 3000
COPY ./default.conf /etc/nginx/conf.d/default.conf 
COPY --from=builder usr/src/app/build  /usr/share/nginx/html 