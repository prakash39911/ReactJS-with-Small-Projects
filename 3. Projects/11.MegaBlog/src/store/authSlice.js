import { createSlice } from "@reduxjs/toolkit";

// we are creating this store to keep track of whether the user is logged in or not (authenticated or not).

const initialstate = {
  status: false,
  userData: null,
};

const authSlice = createSlice({
  name: "auth",
  initialstate,
  reducers: {
    login: (state, action) => {
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      state.status = false;
      state.userData = null;
    },
  },
});

export default authSlice.reducer;

export const { login, logout } = authSlice.actions;
