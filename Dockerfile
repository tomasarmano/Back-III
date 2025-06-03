# Usa una imagen base de Node
FROM node:18

# Crea el directorio de trabajo
WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Expone el puerto de la app
EXPOSE 3000

# Comando por defecto para iniciar el servidor
CMD ["node", "src/server.js"]
