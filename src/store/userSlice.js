import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    signup: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
      localStorage.removeItem("user");
    },
    isUserLoggedIn: (state, action) => {
      state.user = action.payload;
    },
    updateProfile: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logOut, login, signup, isUserLoggedIn, updateProfile } = userSlice.actions;

export default userSlice.reducer;
