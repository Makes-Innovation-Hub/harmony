import { createSlice } from "@reduxjs/toolkit";
import { rotatLeftArray } from "../utils/arrayHelpers";

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
    setCurrentPlayingSong(state, action) {
      state.currentSongIndex = action.songIndex;
    },
    setPlaylist(state, action) {
      state.playlist = action.payload.playlist;
      state.playlistId = action.payload.playlistId;
      state.playlistName = action.payload.playlistName;
      state.playlistLanguage = action.payload.playlistLanguage;
      // state.currentSongIndex = 0;
    },
    populatePlaylistArray(state, action) {
      state.playlist = action.payload;
    },
    shufflePlaylist(state) {
      state.playlist.sort(() => Math.random() - 0.5);
      while (state.playlist[0] === state.currentSong) {
        state.playlist.sort(() => Math.random() - 0.5);
      }
      state.currentSong = state.playlist[0];
      state.currentSongIndex = 0;
    },
    rearrangePlaylistArray(state) {
      let index = state.currentSongIndex;
      rotatLeftArray(state.playlist, index);
      state.currentSongIndex = 0;
    },
  },
});

export const {
  setCurrentSong,
  playSong,
  setCurrentPlayingSong,
  setPlaylist,
  populatePlaylistArray,
  shufflePlaylist,
  rearrangePlaylistArray,
} = playlistSlice.actions;
export default playlistSlice.reducer;
