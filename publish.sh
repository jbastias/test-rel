#!/usr/bin/env bash

set -eo pipefail

VERSION="$1" && \
echo $VERSION

echo 'foobar'

npm publish

# exit 1
# exit 0