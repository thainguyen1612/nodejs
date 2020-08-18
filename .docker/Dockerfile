FROM node:13-alpine

# Set work directory
RUN mkdir -p /var/www/nodejs/
WORKDIR /var/www/nodejs

COPY . /var/www/nodejs

RUN npm install
RUN npm install -g typescript

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

ENTRYPOINT ["./.docker/docker-entrypoint.sh"]

EXPOSE 8080
