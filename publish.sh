#!/usr/bin/env bash

set -eo pipefail

VERSION="v$1-beta" && \
echo $VERSION

echo 'foobar'

npm publish --tag $VERSION

# exit 1
# exit 0