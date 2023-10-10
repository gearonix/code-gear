#/**
# * This docker file is used only in development mode
# * It runs all processes, microservices and libraries
# * in one large container so as not to take up a lot of
# * space. Hot reload enabled.
# */

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

COPY . .

## Copying entrypoint scripts ##

COPY .docker/sh/entrypoint.dev.sh entrypoint.sh


RUN chmod +x entrypoint.sh;

RUN echo "done."
