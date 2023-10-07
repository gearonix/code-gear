#!/bin/bash

yarn nx run server:prisma:init

yarn nx run server:serve --host=0.0.0.0
