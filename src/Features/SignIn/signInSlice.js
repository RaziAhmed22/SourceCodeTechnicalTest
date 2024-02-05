import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  reducers: {
    loggingIn: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loggingIn } = signInSlice.actions;

export default signInSlice.reducer;
