import { createSlice } from "@reduxjs/toolkit";
import { setStorage, removeStorage } from "helpers/LocalStorageHelpers";

export const signInSlice = createSlice({
  name: "Sign In",
  initialState: {
    user: null,
  },
  reducers: {
    signIn: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      /* eslint-disable no-param-reassign */
      state.user = {
        username: "mardhiansyah12",
        role: "admin",
        status: "verfied",
      }; // eslint-disable-line no-param-reassign
      /* eslint-enable no-param-reassign */

      setStorage("credentials", JSON.stringify(state.user), 360 * 24 * 60 * 60);
      console.log(state);
    },
    signOut: (state) => {
      /* eslint-disable no-param-reassign */
      state.user = null; // eslint-disable-line no-param-reassign
      /* eslint-enable no-param-reassign */

      removeStorage("credentials");
      console.log(state);
    },
    incrementByAmount: (state, action) => {
      //   state.value += action.payload;
      console.log(state);
      console.log(action);
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn, signOut, incrementByAmount } = signInSlice.actions;

export default signInSlice.reducer;
