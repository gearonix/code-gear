FROM --platform=linux/amd64 node:20.8.0-alpine as build
WORKDIR /opt/app

## Installing dependencies ##

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

COPY packages/config/package.json packages/config/package.json

RUN yarn install

## Copying source code ##

COPY apps/client apps/client

COPY packages packages

RUN yarn install

COPY . .

## Building app to produciton ##

RUN yarn nx run client:build

## Nginx setup ##

FROM nginx:1.24-alpine

COPY --from=build /opt/app/dist/apps/client /usr/share/nginx/html
COPY ./apps/client/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
