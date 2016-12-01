#!/bin/bash

# firstly run flow check
./node_modules/flow-bin/vendor/flow

if [ $? -eq 0 ]; then
  # if flow check passed run node
  echo "----------"
  node index.js
else
  # else exit with code 0 (nodemon will still run)
  exit 0
fi