#!/usr/bin/env bash

VERSION="$1" && \
TAG="v$1" && \
echo "ver: $VERSION $TAG"

# npm publish --tag $VERSION

ls me-so-solly

if [ "$?" != "0" ]; then
  echo "failed to deploy, removing the already created tag";
  git tag -d $TAG && \
  git push --delete origin $TAG
  exit 1;
fi
