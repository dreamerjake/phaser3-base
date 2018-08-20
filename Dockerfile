FROM node:8

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN npm i -g yarn && chmod +x /usr/local/lib/node_modules/yarn/bin/yarn.js

RUN yarn install

COPY . .

RUN yarn run webpack --mode production

EXPOSE 3000

CMD ["node", "src/server/index.js"]