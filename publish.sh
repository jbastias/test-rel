#!/usr/bin/env bash

set -eo pipefail

VERSION="v$1" && \
echo "ver: $VERSION"

# npm publish --tag $VERSION

echo "$@"

# rm -rf ~/.ssh > /dev/null

# mkdir ~/.ssh/ && echo -e "Host github.com\n\tStrictHostKeyChecking no\n" > ~/.ssh/config

# git tag -d $VERSION && \
# git push --delete origin $VERSION

# exit 1
# exit 0