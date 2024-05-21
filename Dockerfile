FROM node:lts-bullseye AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN chmod +x ./node_modules/.bin/react-scripts
RUN npm run build


FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /var/www/app/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]