# Usa un'immagine base Node.js
FROM node:16

# Imposta la directory di lavoro all'interno del contenitore
WORKDIR /app

# Copia il package.json e il package-lock.json nella directory di lavoro
COPY package*.json ./

# Installa le dipendenze
RUN npm install

# Copia il codice sorgente nella directory di lavoro
COPY . .

# Avvia il server Node.js con nodemon
CMD ["npm", "run", "dev"]
