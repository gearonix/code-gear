FROM --platform=linux/amd64 node:20.8.0-alpine as build
WORKDIR /opt/app

## Installing dependencies ##

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

COPY packages/config/package.json packages/config/package.json

RUN yarn install

## Copying source code ##

COPY apps/server apps/server

COPY packages packages

RUN yarn install

COPY nx.json project.json .serve.env ./

## Building app to produciton ##

RUN yarn nx run server:build

## Entrypoint ##

FROM --platform=linux/amd64 node:20.8.0-alpine
WORKDIR /opt/app

COPY --from=build /opt/app/dist/apps/server ./

RUN sed -i '/workspace:/d' package.json

RUN npm install --omit="dev"

RUN npx prisma generate

ENTRYPOINT node ./main.js
