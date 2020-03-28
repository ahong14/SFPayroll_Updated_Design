FROM node:latest

WORKDIR /app/src/server

COPY . /app/src/server

RUN npm install

RUN npm install nodemon -g

EXPOSE 4000

CMD ["nodemon", "server.js"]