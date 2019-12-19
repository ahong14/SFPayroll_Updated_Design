FROM node:12.12.0

#copy frontend contents
WORKDIR /app/src/frontend

COPY ./frontend /app/src/frontend

WORKDIR /app/src/frontend

RUN npm install

RUN npm run build

#copy server contents
WORKDIR /app/src/server

COPY ./server /app/src/server

RUN npm install

RUN npm install nodemon -g

EXPOSE 4000

CMD ["nodemon", "server.js"]