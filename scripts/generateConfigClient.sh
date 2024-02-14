#!/bin/bash
read -p "VITE_SERVER_PORT: " port
read -p "VITE_SERVER_BASE_URL": " baseUrl
touch ../client/.env
echo '
  VITE_SERVER_PORT='$port'
  VITE_SERVER_BASE_URL='$baseUrl'
' > ../client/.env