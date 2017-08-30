FROM node:alpine

RUN mkdir -p /home/cronbot

WORKDIR /home/cronbot

COPY .  .

RUN npm install

CMD ["npm", "start"]
