FROM node:alpine

WORKDIR /app
COPY package*.json .
RUN npm install

COPY . /app

ENV PORT=8080

EXPOSE 8080

CMD [ "npm", "start" ]