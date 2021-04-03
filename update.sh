#!/usr/bin/env zsh

set -e

echo ...committing any updates...
git commit -am 'auto commit updates'
echo ...pushing...
git push
