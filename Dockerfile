FROM node:16-alpine AS build

RUN apk add git

WORKDIR /app

COPY . ./

RUN yarn install
RUN yarn run postinstall && yarn run build

FROM nginx AS prod

COPY docker/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build /app/dist/ /usr/share/nginx/html/