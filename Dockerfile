# Use the official Cypress base image
FROM cypress/included:12.17.1

# Set the working directory
WORKDIR /e2e

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the entire project into the container
COPY . .

# Set the entry point to run Cypress tests
ENTRYPOINT ["npx", "cypress", "run"]
