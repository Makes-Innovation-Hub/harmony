import { createSlice } from "@reduxjs/toolkit";

export const selectedSongSlice = createSlice({
    name: "selectedSong",
    initialState: {
        artist: '',
        song: ''
    },
    reducers: {
        setSelectedSong: (state, { payload }) => {
            state = payload;
        },
    },
});

export const { setSelectedSong } = selectedSongSlice.actions;

export default selectedSongSlice.reducer;
