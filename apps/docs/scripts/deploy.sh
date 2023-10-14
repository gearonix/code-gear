#!/bin/bash

# This script should work only at the root of the project.

source .local.env

echo -e "deploy.sh"
echo -e "BEGET_HOST: $BEGET_HOST"
echo -e "WEBSITE_FOLDER: $WEBSITE_FOLDER"

cd dist/docs

zip -r _dist.zip .

scp _dist.zip "$BEGET_HOST":~/"$WEBSITE_FOLDER"/public_html/code-gear/docs

ssh "$BEGET_HOST" << EOF
  cd ~/$WEBSITE_FOLDER/public_html/code-gear/docs
  unzip -o _dist.zip && rm _dist.zip

  echo -e "[success] docs updated."
EOF

rm _dist.zip

