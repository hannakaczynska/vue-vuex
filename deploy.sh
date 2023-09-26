#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m "deployment"
git push -f git@github.com:hannakaczynska/vue-vuex.git master:gh-pages

cd -