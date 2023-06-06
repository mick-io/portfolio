# Use a Node.js base image
FROM node:16-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files to the working directory
COPY . .

# Expose the port that your static website will run on (adjust if needed)
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]
