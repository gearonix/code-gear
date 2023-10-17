<p align="center">
  <img src="https://github.com/Gearonix/code-gear/blob/master/apps/docs/public/logo.svg" width="145" align="center" alt="Code-Gear" style="max-width: 100%;" />
  <h2 align="center">
    🚀 <em>CodeGear</em> -  Online Code Editor
  </h2>
</p>
<br/>
<p align="center">
  <a href="https://gearonixx.com/code-gear/docs" rel="nofollow">
    <img src="https://img.shields.io/github/license/Gearonix/code-gear" alt="License">
  </a>
  <a href="https://gearonixx.com/code-gear/docs" rel="nofollow">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs Welcome">
  </a>
  <a href="https://gearonixx.com/code-gear/docs" rel="nofollow">
    <img src="https://img.shields.io/github/stars/Gearonix/code-gear" alt="stars">
  </a>
</p>

## Documentation

Take a look at the [documentation](https://gearonixx.com/code-gear/docs/) to see a detailed overview of the project.

## Why it is awesome?

[*CodeGear*](https://github.com/Gearonix/code-gear) is an *online code editor* (like [VS Code](https://code.visualstudio.com/)) 
in which youcould conduct online interviews and edit code in real time with other people.

## Customization

It supports *10-15 themes* (including popular ones like [Monokai](https://monokai.pro/) or [Nord](https://www.nordtheme.com/))

Moreover, you can create your *own unique theme*.
You can customize the color, background, font size, tab size (default is 4 spaces) and much more!

## Functionality

You can *find*, *replace* text, create *tabs*,
and also *run your code* (`javascript` and `python` are currently supported).

> **Note**
> All your changes are saved to `localStorage` automatically,
> so you don't have to save your code manually.

## Real-time Changes

You can also log in and send a link to another person so that he can come in and edit the code with you in *real time*.

## What is the essence of this project?

In fact, the project was seen as an opportunity to try out a large number of different technologies.
And I succeeded - I created *an environment* in which you can experiment and introduce *new technologies* and functionality.

## Technology Stack

#### 🌟 Frontend
- Preact
- MobX
- Styled-components
- react-spring
- FSD + Microfrontends

#### 💻 Backend
- NestJS
- Kafka
- Docker
- Microservices + CQRS
- Prisma

And, of course, [Nx](https://nx.dev/), with its configurations and a lot of binding scripts.

## Why are there so many configurations?

Firstly, I am an enjoyer of *complex solutions* and large projects.
Secondly, this was the goal of the project - to create *something unusual*, *large* and unlike ordinary pet projects. 

This project is more about **how it is made** than what it can do.
Check out the [documentation](https://gearonixx.com/code-gear/docs/) to learn more about the project.

Something like that! 🚀 💫

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/package-manager) version 20 or higher.
- [Docker](https://docs.docker.com/engine/install/ubuntu/) version 21 or higher.
- [Yarn](https://github.com/yarnpkg/berry) version 3.2.0 or higher.

### Setting environment variables

Copy the environment variables from `env` folder. This file contains all the 
configuration needed to run the project.

```sh
$ cp tools/dev/src/env/* .
$ mv .override.env .docker
```

### 1. Manual Installation

Install dependencies.

```sh [yarn]
$ yarn install
```

Run services like [redis](https://redis.io/),
[kafka](https://kafka.apache.org/), [zookeeper](https://zookeeper.apache.org/) and others in docker in a virtual environment.

```sh [yarn]
$ nx run:dev docker
```

Start the project. This simple command will launch a cluster of microservices and all frontend applications! It will also collect all dependent libraries that are located in the `packages` folder.

```sh [yarn]
$ nx serve
```

### 2. Run in docker virtual environment (`development` mode)

You can run the project in one large container, with docker volumes set to `apps` and `packages` to enable hot-reload.

```sh [yarn]
$ yarn dlx nx run:dev:full docker
```

Since this is a monorepository, running each microservice in a separate container is not beneficial in terms of memory (`2.5GB` per container) in development mode.

The `full` flag means that in addition to the main services like mysql, you also run `runtime` services, that is, microservices and applications.

### 3. Run in docker virtual environment (`production` mode)

```sh [yarn]
$ yarn dlx nx run:prod docker
```

Unlike `development` mode, each application or microservice will be launched in isolation from others 
(using [multistage build](https://docs.docker.com/build/building/multi-stage/)) and thus it will not take 
up much memory on your disk (`40MB`-`200MB` each container).

---

The dev server should be running at http://localhost:3000. 
Visit the URL in your browser to see project in action.

> **Nx-Console**
> It is highly recommended to add the [Nx-Console](https://nx.dev/recipes/nx-console) plugin to your IDE,
> as it greatly simplifies the management of > various 
> scripts and is indispensable in my opinion in a monorepository.
