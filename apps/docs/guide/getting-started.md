# Getting Started

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) version 20 or higher.
- [Docker](https://www.docker.com/) version 21 or higher.
- [Yarn](https://github.com/yarnpkg/berry) version 3.2.0 or higher.

### Setting environment variables

Copy the environment variables from `.env.example`. This file contains all the 
configuration needed to run the project.

::: code-group

```sh
$ cp tools/dev/src/.env.example .env
```

:::

---

### 1. Manual Installation

Install dependencies.

::: code-group

```sh [yarn]
$ yarn install
```

:::

Run services like [redis](https://redis.io/),
[kafka](https://kafka.apache.org/), [zookeeper](https://zookeeper.apache.org/) and others in docker in a virtual environment.

::: code-group

```sh [yarn]
$ nx run:dev docker
```

:::

Start the project. This simple command will launch a cluster of microservices and all frontend applications! It will also collect all dependent libraries that are located in the `packages` folder.

::: code-group

```sh [yarn]
$ nx serve
```

### 2. Run in docker virtual environment (`development` mode)

You can run the project in one large container, with docker volumes set to `apps` and `packages` to enable hot-reload.

::: code-group

```sh [yarn]
$ yarn dlx nx run:dev:full docker
```

:::

Since this is a monorepository, running each microservice in a separate container is not beneficial in terms of memory (`2.5GB` per container) in development mode.

The `full` flag means that in addition to the main services like mysql, you also run `runtime` services, that is, microservices and applications
### 3. Run in docker virtual environment (`production` mode)

::: code-group

```sh [yarn]
$ yarn dlx nx run:prod docker
```

Unlike `development` mode, each application or microservice will be launched in isolation from others 
(using [multistage build](https://docs.docker.com/build/building/multi-stage/)) and thus it will not take 
up much memory on your disk (`40`-`200MB` each container)

:::

---

The dev server should be running at http://localhost:3000. 
Visit the URL in your browser to see project in action.
