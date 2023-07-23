import { createSlice } from "@reduxjs/toolkit";
// auth
const initialAuthState = { username: "hoseinx@gnail.com", isAuth: false };
const appDataSlice = createSlice({
  name: "appData",
  initialState: initialAuthState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
      state.username = "hoseinx";
    },
    logout: (state) => {
      state.isAuth = false;
      state.username = "";
    },
  },
});

export const appDataAction = appDataSlice.actions;
export default appDataSlice.reducer;
