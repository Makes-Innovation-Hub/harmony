#!/bin/bash

CONFIG_DIR="config"

# Check if the config.env file already exists
if [ -f "$config/config.env" ]; then
  echo "config.env file already exists."
  echo "Please edit the existing config.env file to make changes."
else
  echo "Creating a new config.env file..."
  mkdir -p "$CONFIG_DIR"
  touch "$CONFIG_DIR/config.env"

  # Prompt the user to enter the required environment variables
  echo "Enter the value for PORT:"
  read -r PORT

  echo "Enter the value for NODE_ENV:"
  read -r NODE_ENV

  echo "Enter the value for MONGO_URI:"
  read -r MONGO_URI

  echo "Enter the value for OPEN_AI_API_KEY:"
  read -r OPEN_AI_API_KEY
  # Write the environment variables to the config.env file
  echo "PORT=$PORT" >> "$CONFIG_DIR/config.env"
  echo "NODE_ENV=$NODE_ENV" >> "$CONFIG_DIR/config.env"
  echo "MONGO_URI=$MONGO_URI" >> "$CONFIG_DIR/config.env"
  echo "OPEN_AI_API_KEY=$OPEN_AI_API_KEY" >> "$CONFIG_DIR/config.env"

  echo "config.env file created and configured successfully in the $CONFIG_DIR folder."
fi
