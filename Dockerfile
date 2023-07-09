# utiliser l'image node:18-alpine comme image de base
FROM node:17-alpine
# définir le dossier courant de l'image
WORKDIR /app
# copier le package.json dans le dossier /app de l'image
COPY package.json .
# installer les dépendances
RUN npm install
# copier le contenu du dossier courant dans le dossier /app de l'image
COPY . .
# exposer le port 5173
EXPOSE 5173
# lancer l'application
CMD ["npm", "start"]


