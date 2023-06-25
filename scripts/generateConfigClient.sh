#!/bin/bash
read -p "PORT: " port
touch ./client/.env
echo '
  PORT='$port'
' > ./client/.env