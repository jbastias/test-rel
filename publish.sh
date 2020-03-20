#!/usr/bin/env bash

VERSION="$1" && \
TAG="v$1"

# npm publish --tag $VERSION

ls && ls me-so-solly

if [ "$?" != "0" ]; then
  echo "failed to deploy...";

  mkdir ~/.ssh/ && echo -e "Host github.com\n\tStrictHostKeyChecking no\n" > ~/.ssh/config

  git fetch --all
  GITHUB_TAG=`git --no-pager tag | grep $TAG`

  if [ "$GITHUB_TAG" != "" ]; then
    echo "Removing the already created tag from github: $TAG";
    git tag -d $TAG && \
    git push --delete origin $TAG
    exit 1;
  fi
fi
