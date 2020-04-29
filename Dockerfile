FROM node:14

ENV PORT=6200

WORKDIR /usr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE $PORT

CMD ["node", "index.js"]

