# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port that your Next.js app is running on (e.g., 3000)
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]
