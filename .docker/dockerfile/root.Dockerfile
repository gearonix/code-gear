# This docker file is used only in development mode

FROM --platform=linux/amd64 node:20.8.0-alpine as build
WORKDIR /opt/app

## Installing dependencies ##

COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn .yarn

COPY packages/config/package.json packages/config/package.json

RUN yarn install

## Copying source code ##

COPY packages packages

COPY apps apps

RUN yarn install

COPY nx.json project.json .serve.env .docker.env ./

## Copying entrypoint scripts ##

COPY .docker/sh/dev entrypoint

RUN find entrypoint -exec chmod +x {} \;

RUN echo "done."
