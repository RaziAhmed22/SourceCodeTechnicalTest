import { configureStore } from "@reduxjs/toolkit";
import signInSlice from "../Features/SignIn/signInSlice";

export const store = configureStore({
  reducer: {
    signIn: signInSlice,
  },
});
