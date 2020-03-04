#!/usr/bin/env bash

# set -eo pipefail

VERSION="$1" && \
TAG="v$1" && \
echo "ver: $VERSION $TAG"

# npm publish --tag $VERSION

ls me-so-solly

if [ "$?" != "0" ]; then
  git tag -d $TAG && \
  git push --delete origin $TAG
  echo "BAD";
  exit 1;
fi
