FROM node:16-alpine3.12

RUN yarn global add @vue/cli

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN yarn install

CMD [ "yarn", "serve" ]
