#!/bin/bash
mkdir ./tmp;
mkdir ./tmp/client;
npm run installAll;
npm run buildClient;
cp -r ./client/dist ./tmp/client;
cp -r ./server ./tmp;
zip -r ./harmony.zip ./tmp;
rm -rf ./tmp;