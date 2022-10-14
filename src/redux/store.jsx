import { configureStore } from "@reduxjs/toolkit";
import signInReducer from "layouts/authentication/sign-in/reduxSlice/signInSlice";

export default configureStore({
  reducer: {
    signIn: signInReducer,
  },
});
