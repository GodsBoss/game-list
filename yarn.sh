#!/bin/sh

if [ -n "${GAME_LIST_PORT}" ]
then
  PORT_ARG="-p${GAME_LIST_PORT}:3000"
fi

docker run --rm -it -v `pwd`:/root/game-list --workdir /root/game-list "${PORT_ARG}" node:8.11.4-alpine yarn $@
