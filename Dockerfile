FROM node:alpine

RUN mkdir /var/www

WORKDIR "/var/www"

COPY package.json .
COPY yarn.lock .

# build
RUN yarn global add modclean
RUN yarn install
RUN modclean -r

COPY . .

EXPOSE 3000
CMD ['yarn start']