FROM node:alpine

WORKDIR /usr/app

## Installing application and initializing it
COPY ./ ./
RUN npm install

## Default command
CMD ["npm", "start"]