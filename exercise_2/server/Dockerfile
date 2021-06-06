FROM node:alpine


RUN mkdir -p /usr/cc_exercise2/src/server

WORKDIR /usr/cc_exercise2/src/server

COPY package.json /usr/cc_exercise2/src/server/

RUN npm install

COPY . /usr/cc_exercise2/src/server

EXPOSE 3000

CMD ["node", "server.js"]
