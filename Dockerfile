FROM elixir:latest

ENV NODE_VERSION 10
ENV YARN_VERSION 1.15.2
ENV PHOENIX_VERSION 1.4.3

RUN apt-get update
RUN curl -sL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash
RUN apt-get install -y nodejs inotify-tools
RUN npm install n yarn@${YARN_VERSION} -g
RUN n stable
RUN npm update -g npm
RUN mix local.hex --force
RUN mix archive.install --force hex phx_new ${PHOENIX_VERSION}
RUN mix local.rebar --force

WORKDIR /app
