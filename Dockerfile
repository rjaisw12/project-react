# Étape 1 : Créer l'image de construction
FROM node:14.17.0-alpine as build

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent

COPY . ./
RUN npm run build

# Étape 2 : Utiliser l'image légère de Nginx pour servir l'application
FROM nginx:1.21.0-alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
