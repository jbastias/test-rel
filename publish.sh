#!/usr/bin/env bash

VERSION="$1" && \
TAG="v$1" && \
echo "ver: $VERSION $TAG"

# npm publish --tag $VERSION

ls && ls me-so-solly

if [ "$?" != "0" ]; then
  echo "failed to deploy, removing the already created tag";

  mkdir ~/.ssh/ && echo -e "Host github.com\n\tStrictHostKeyChecking no\n" > ~/.ssh/config

  echo fetch
  git fetch --all

  echo tag
  git --no-pager tag

  git --no-pager tag | grep $TAG

  git tag -d $TAG && \
  git push --delete origin $TAG
  exit 1;
fi
