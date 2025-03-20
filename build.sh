#!/bin/bash

zip -r aws-metadata-app.zip server.js package.json package-lock.json Dockerfile

aws s3 cp aws-metadata-app.zip s3://hanna-arkhipchuk-webapp-bucket2/aws-metadata-app.zip
