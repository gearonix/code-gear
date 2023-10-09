#!/bin/bash

yarn nx run gateway:prisma:init

yarn nx serve  --host=0.0.0.0
