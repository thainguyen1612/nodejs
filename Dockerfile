FROM node:12-alpine

# Set work directory
RUN mkdir /code
WORKDIR /code

COPY package*.json /code/

RUN npm install

COPY . /code

COPY docker-entrypoint.sh /usr/local/bin/

RUN chmod 777 /usr/local/bin/docker-entrypoint.sh \
    && ln -s /usr/local/bin/docker-entrypoint.sh /

ENTRYPOINT ["./docker-entrypoint.sh"]

EXPOSE 8080
