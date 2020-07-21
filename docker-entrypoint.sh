#!/bin/sh



apk update
apk upgrade
apk add bash

ls -la
node app.js
