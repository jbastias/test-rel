#!/usr/bin/env bash

set -eo pipefail

VERSION="$1" && \
echo $VERSION

git tag -d $VERSION && \
git push --delete origin $VERSION
