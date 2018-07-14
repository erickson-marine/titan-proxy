FROM keymetrics/pm2:8-alpine

EXPOSE 80
EXPOSE 443
EXPOSE 5000

RUN apk update && apk add python && apk add make && apk add g++ && apk add yarn

#Setup ENV
ENV NPM_CONFIG_LOGLEVEL warn

# Bundle metadata
COPY pm2.json package.json yarn.lock ./

# Install app dependencies
RUN yarn install --production

#Copy App
COPY src src/

CMD [ "pm2-runtime", "start", "pm2.json" ]
