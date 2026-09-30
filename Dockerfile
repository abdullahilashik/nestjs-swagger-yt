# Build first
FROM node as build
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .
RUN npm run build

# Build

CMD [ "npm", "run", "start:dev" ]