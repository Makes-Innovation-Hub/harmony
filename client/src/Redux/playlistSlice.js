import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [],
  playlistId: null,
  playlistName: null,
  playlistLanguage: null,
  currentSong: null,
  currentSongIndex: 0,
  currentSongIsPlaying: false,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSong = action.payload.currentSong;
      state.currentSongIndex = action.payload.songIndex;
    },
    playSong(state, action) {
      state.currentSongIsPlaying = action.payload;
    },
    setPlaylist(state, action) {
      state.playlist = action.payload.playlist;
      state.playlistId = action.payload.playlistId;
      state.playlistName = action.payload.playlistName;
      state.playlistLanguage = action.payload.playlistLanguage;
      state.currentSongIndex = 0;
    },
    populatePlaylistArray(state, action) {
      state.playlist = action.payload;
    },
  },
});

export const { setCurrentSong, playSong, setPlaylist, populatePlaylistArray } =
  playlistSlice.actions;
export default playlistSlice.reducer;
