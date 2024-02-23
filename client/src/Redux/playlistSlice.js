import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [],
  playlistId: null,
  playlistName: null,
  playlistLanguage: null,
  currentSongIndex: null,
  currentSongIsPlaying: false,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSongIndex = action.payload;
    },
    playSong(state, action) {
      state.currentSongIsPlaying = action.payload;
    },
    setPlaylist(state, action) {
      state.playlist = action.payload.playlist;
      state.playlistId = action.payload.playlistId;
      state.playlistName = action.payload.playlistName;
      state.playlistLanguage = action.payload.playlistLanguage;
    },
  },
});

export const { setCurrentSong, playSong, setPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
