import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isVerified: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.isVerified = action.payload.isVerified;
      state.user = action.payload.user; // Optionally store user data
    },
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
