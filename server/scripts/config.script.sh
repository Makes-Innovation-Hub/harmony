CONFIG_DIR="config"

# Check if the config.env file already exists
if [ -f "$CONFIG_DIR/config.env" ]; then
  echo "config.env file already exists."
  echo "Please edit the existing config.env file to make changes."
else
  echo "Creating a new config.env file..."
  mkdir -p "$CONFIG_DIR"
  touch "$CONFIG_DIR/config.env"

  # Define an array of environment variable names
  declare -a variables=("PORT" "NODE_ENV" "MONGO_URI_DEV" "MONGO_URI_PROD" "OPEN_AI_API_KEY" "SPOTIFY_CLIENT_ID" "SPOTIFY_CLIENT_SECRET","BASE_SERVER_URL", "SERAP_API_KEY")

  # Loop over the array and prompt the user to enter values for each variable
  for variable in "${variables[@]}"
  do
    echo "Enter the value for $variable:"
    read -r value
    echo "$variable=$value" >> "$CONFIG_DIR/config.env"
  done

  echo "config.env file created and configured successfully in the $CONFIG_DIR folder."
fi
