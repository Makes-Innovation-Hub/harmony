#!/bin/bash
read -p "PORT: " port
read -p "BASE URL: " baseUrl
touch ./client/.env
echo '
  VITE_SERVER_PORT='$port'
  VITE_SERVER_BASE_URL='$baseUrl'
' > ./client/.env