#!/usr/bin/env bash

set -eo pipefail

VERSION="$1" && \
echo $VERSION

npx semantic-release