FROM node:18.11

WORKDIR /chores

COPY . .

RUN npm i

RUN npm run start