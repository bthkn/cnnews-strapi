FROM node:20-alpine AS pluginbuilder
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /tmp/cnnews-llm-plugin
COPY src/plugins/cnnews-llm ./
RUN npm install && \
    npm run build


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
    npm ci
ENV PATH=/opt/node_modules/.bin:$PATH
WORKDIR /opt/app
COPY . .
COPY --from=pluginbuilder /tmp/cnnews-llm-plugin/dist src/plugins/cnnews-llm/dist
RUN npm run build && \
    chown -R node:node /opt/app
USER node
EXPOSE 1337
ENTRYPOINT [ "npm" ]
CMD ["run", "develop", "--", "--watch-admin", "--debug"]
