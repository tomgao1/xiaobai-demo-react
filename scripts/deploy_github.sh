#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@github.com:tomgao1/xiaobei-react-website.git &&
git push -u origin master -f
cd -