import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  playlist: [],
  currentSongIndex: null,
  playlistId: null,
  playlistType: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentSong(state, action) {
      state.currentSongIndex = action.payload;
    },
    setPlaylist(state, action) {
      state.playlist = action.payload.playlist;
      state.playlistId = action.payload.playlistId;
      state.playlistType = action.payload.playlistType;
    },
  },
});

export const { setCurrentSong, setPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
