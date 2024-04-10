import { createSlice } from "@reduxjs/toolkit";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase";
import { useEffect } from "react";

export const LoginAndImages = createSlice({
  name: "login",
  initialState: { authenticatedUser: false, profile: {} },
  reducers: {
    setauthenticatedUser: (state, action) => {
      state.authenticatedUser = action.payload;
    },
    logout: (state) => {
      state.authenticatedUser = false;
      state.profile = {};
    },
    setProfile: (state) => {
      const unsub = onAuthStateChanged(auth, (user) => {
        state.profile = user;
        console.log(user);
      });

      sessionStorage.setItem("profile", JSON.stringify(state.profile));
    },
  },
});

export const { setauthenticatedUser, setProfile, logout } =
  LoginAndImages.actions;
export default LoginAndImages.reducer;
