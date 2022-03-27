# syntax=docker/dockerfile:1
FROM node:16-alpine as builder
WORKDIR /home/node/app
COPY . .
RUN npm install
RUN npm run build

FROM node:16-alpine
WORKDIR /home/node/app
COPY package.json ./
COPY --from=builder /home/node/app/.next ./.next
RUN npm install --production
CMD [ "npm", "start" ]
