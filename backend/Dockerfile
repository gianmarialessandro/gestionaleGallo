# Usa un'immagine base Node.js
FROM node:16

# Imposta la directory di lavoro all'interno del contenitore
WORKDIR /app

# Copia il package.json e il package-lock.json nella directory di lavoro
COPY package*.json ./
COPY server.js .

# Installa le dipendenze
RUN npm install

# Espone la porta su cui il server sarà in ascolto
EXPOSE 4000

# Copia il codice sorgente nella directory di lavoro
#COPY . .

# Avvia il server Node.js con nodemon
CMD ["npm", "run", "dev"]
