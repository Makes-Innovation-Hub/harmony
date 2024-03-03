import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isVerified: false,
  },
  reducers: {
    setAuthState: (state, action) => {
      state.isVerified = action.payload.isVerified;
    },
  },
});

export const { setAuthState } = authSlice.actions;

export default authSlice.reducer;
