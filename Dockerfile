FROM node:12

WORKDIR /app

COPY package*.json ./

RUN yarn global add gatsby-cli

RUN yarn install

COPY . .

ENV NODE_ENV production

EXPOSE 9000

RUN ["gatsby", "build"]

CMD ["gatsby", "serve", "-H", "0.0.0.0"]
