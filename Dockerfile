FROM node:16 as base

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

ARG JEST_JUNIT_OUTPUT_DIR=./reports/

# Bundle test app source
FROM base as test
WORKDIR /usr/src/app
RUN npm install
COPY . .
CMD ["npm", "run", "test"]

# Bundle prod app source
FROM base as prod
WORKDIR /usr/src/app
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]