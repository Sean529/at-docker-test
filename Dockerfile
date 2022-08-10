FROM node:14-alpine

WORKDIR /code

ADD . /code

EXPOSE 3001

CMD node index.js