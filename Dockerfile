# backend/Dockerfile
FROM node:18-slim

WORKDIR /app

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy shared types
COPY ../shared /shared

# Copy the rest of the backend application
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3001

# Command to run the application
CMD ["npm", "run", "start:prod"]