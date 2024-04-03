# Playlist Documentation

This documentation provides an overview of the routes and functionalities of the playlist in the backend server.

## Routes

### 1. `/api/v1/playlist/playlistData`

- **Method:** GET
- **Description:** Retrieves data for a specific playlist identified by its ID. It fetches data from the YouTube API, stores it in the database, and returns the playlist data.
- **Parameters:**
  - `id`: The ID of the playlist (required).
  - `update`: Optional query parameter. If set to "true", the data will be updated from the YouTube API even if it exists in the database.
- **Response:** Returns JSON data containing information about the playlist.

### 2. `/api/v1/playlist/profilePic`

- **Method:** GET
- **Description:** Retrieves the profile picture URL of a YouTube channel identified by its ID.
- **Parameters:**
  - `id`: The ID of the YouTube channel (required).
- **Response:** Returns JSON data containing the profile picture URL.

### 3. `/api/v1/playlist/allPlaylistData`

- **Method:** GET
- **Description:** Retrieves data for all playlists. This route is for testing purposes and returns mock data.
- **Response:** Returns JSON data containing information about all playlists.

## Controllers

### 1. `playlistController.js`

This file contains controller functions for handling requests related to playlists.

#### `getPlaylistData`

- **Description:** Retrieves playlist data from the YouTube API or database, updates if necessary, and returns the data.
- **Usage:** Called when accessing the `/api/v1/playlist/playlistData` route.
- **Parameters:** `id` (required), `update` (optional).
- **Returns:** JSON data containing playlist information.

#### `getChannelProfilePic`

- **Description:** Retrieves the profile picture URL of a YouTube channel.
- **Usage:** Called when accessing the `/api/v1/playlist/profilePic` route.
- **Parameters:** `id` (required).
- **Returns:** JSON data containing the profile picture URL.

#### `getAllPlaylistsData`

- **Description:** Returns mock data for all playlists.
- **Usage:** Called when accessing the `/api/v1/playlist/allPlaylistData` route.
- **Returns:** JSON data containing mock playlist information.

## Models

### 1. `Playlist.js`

- **Description:** Defines the schema for storing playlist data in the MongoDB database.
- **Fields:**
  - `playlistId`: String (required, unique)
  - `items`: Array of objects containing video details
  - `updatedAt`: Date (default: current date)
- **Usage:** Used to interact with the `playlists` collection in the database.

## Cron Job

- **Description:** Scheduled task to update playlists in the database every week.
- **Scheduled Time:** Every Sunday at 4:00 AM.
- **Functionality:** Checks if any playlist needs an update based on the last update time.

## Dependencies

- **Express:** Web framework for Node.js.
- **Axios:** Promise-based HTTP client for making HTTP requests.
- **Mongoose:** MongoDB object modeling tool.
- **Node-cron:** Cron-like scheduler for Node.js.

## Environment Variables

- **YOUTUBE_API_KEY:** API key required for accessing the YouTube Data API.

## Setup

1. Ensure MongoDB is installed and running.
2. Set up environment variables, including the `YOUTUBE_API_KEY`.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.
