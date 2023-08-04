# utiliser l'image node:18-alpine comme image de base
FROM node:18-alpine as BUILD_IMAGE
# définir le dossier courant de l'image
WORKDIR /app/react-app
# copier le package.json dans le dossier /app de l'image
COPY package.json .
# installer les dépendances
RUN npm install
# copier le contenu du dossier courant dans le dossier /app de l'image
COPY . .
# build l'application
CMD ["npm", "run", "dev"]



