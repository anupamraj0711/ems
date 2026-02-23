FROM node:18

WORKDIR /app

# package files copy karo
COPY package*.json ./

# dependencies install
RUN npm install

# baaki project copy karo
COPY . .

# Vite default port
EXPOSE 5173

# Vite dev server run karo
CMD ["npm", "run", "dev", "--", "--host"]