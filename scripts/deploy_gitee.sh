#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin git@gitee.com:gao87249903/xiaobai-react-website.git &&
git push -u origin master -f
cd -