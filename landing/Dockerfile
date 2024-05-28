FROM node:16-alpine3.12

RUN mkdir -p /app

WORKDIR /app

COPY ./package*.json .

RUN npm install

EXPOSE 7500

CMD [ "npm", "run", "serve", "--", "--port", "7500" ]
