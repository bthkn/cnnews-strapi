FROM node:20-alpine AS pluginbuilder
WORKDIR /tmp/cnnews-llm-plugin
COPY src/plugins/cnnews-llm ./
RUN npm install && \
    NODE_ENV=development npm run build && \
    rm -r node_modules


FROM node:20-alpine

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /opt/
COPY package.json package-lock.json ./
RUN apk update && \
    apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    git \
    bash \
    nasm \
    zlib-dev \
    libpng-dev \
    vips-dev && \
    npm install -g node-gyp && \
    npm config set fetch-retry-maxtimeout 600000 -g && \
    npm install

ENV PATH=/opt/node_modules/.bin:$PATH

WORKDIR /opt/app
COPY . .
COPY --from=pluginbuilder /tmp/cnnews-llm-plugin/dist/ /opt/app/src/plugins/cnnews-llm/dist/

# WORKDIR /opt/app/src/plugins/cnnews-llm
# RUN npm install && \
#     npm run build && \
#     rm -r node_modules

# WORKDIR /opt/app
RUN npm run build && \
    chown -R node:node /opt/app

USER node

EXPOSE 1337

ENTRYPOINT [ "npm" ]

CMD ["run", "develop", "--", "--watch-admin", "--debug"]
