#!/bin/bash
read -p "PORT: " port
read -p "BASE URL: " baseUrl
touch ./client/.env
echo '
  PORT='$port'
  VITE_SERVER_BASE_URL='$baseUrl'
' > ./client/.env