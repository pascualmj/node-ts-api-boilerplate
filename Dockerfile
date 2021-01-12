FROM node:12

ENV APP_PORT 8080
ENV APP_ROOT_DIR /usr/src/app

WORKDIR $APP_ROOT_DIR

COPY package*.json ./
COPY tsconfig.json ./

COPY src $APP_ROOT_DIR/src

RUN ls -a

RUN npm install
RUN npm run build

EXPOSE 8080
CMD ["node", "./dist/server.js"]