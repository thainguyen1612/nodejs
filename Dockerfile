FROM node:12-alpine

# Set work directory
RUN mkdir -p /var/www/nodejs/
WORKDIR /var/www/nodejs

COPY package*.json /var/www/nodejs/

RUN npm install

COPY . /var/www/nodejs

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

ENTRYPOINT ["./docker-entrypoint.sh"]

EXPOSE 8080
