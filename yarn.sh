#!/bin/sh

docker run --rm -it -v `pwd`:/root/game-list --workdir /root/game-list node:8.11.4-alpine yarn $@
