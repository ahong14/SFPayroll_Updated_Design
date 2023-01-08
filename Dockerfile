FROM node:18

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

RUN npm install forever -g

EXPOSE 4000

EXPOSE 4001

EXPOSE 4002

EXPOSE 4003

CMD ["forever", "server.js"]
