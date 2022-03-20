# syntax=docker/dockerfile:1
FROM node:14-alpine as builder
WORKDIR /home/node/app
COPY package.json ./
RUN npm install
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

FROM node:14-alpine
WORKDIR /home/node/app
COPY package.json ./
COPY .env ./
COPY --from=builder /home/node/app/dist ./dist
RUN npm install --production
CMD [ "npm", "start" ]
