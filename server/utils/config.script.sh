#!/bin/bash

CONFIG_DIR="config"

# Check if the config.env file already exists
if [ -f "$CONFIG_DIR/config.env" ]; then
  echo "config.env file already exists."
  echo "Please edit the existing config.env file to make changes."
else
  echo "Creating a new config.env file..."
  mkdir -p "$config"
  touch "$config/config.env"

  # Prompt the user to enter the required environment variables
  echo "Enter the value for VARIABLE_NAME_1:"
  read -r variable_name_1

  echo "Enter the value for VARIABLE_NAME_2:"
  read -r variable_name_2

  # Write the environment variables to the config.env file
  echo "VARIABLE_NAME_1=$variable_name_1" >> "$CONFIG_DIR/config.env"
  echo "VARIABLE_NAME_2=$variable_name_2" >> "$CONFIG_DIR/config.env"

  echo "config.env file created and configured successfully in the $CONFIG_DIR folder."
fi
