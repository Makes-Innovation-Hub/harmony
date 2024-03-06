# Use the official Puppeteer image as the base
FROM ghcr.io/puppeteer/puppeteer:16.1.0
# Set the working directory inside the container to /app
WORKDIR /app
# The Puppeteer Docker image runs as a non-root user 'pptruser' by default.
# Ensure files copied into the container are owned by this user.
# Copy package.json and package-lock.json (if available) to the working directory
COPY --chown=pptruser:pptruser ./server/package*.json ./
# Install project dependencies
# No need to switch user since the image uses 'pptruser' by default
RUN npm install
# Copy the rest of your application's source code
COPY --chown=pptruser:pptruser ./server ./
# Your app binds to port 3000 by default, so expose this port
EXPOSE 3000
# Define the command to run your app
CMD ["node", "server.js"]