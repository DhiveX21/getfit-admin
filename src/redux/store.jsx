import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "_slices/orderSlice";
import patientSlice from "_slices/patientSlice";
import userSlice from "_slices/userSlice";

export default configureStore({
  reducer: {
    signIn: userSlice,
    patient: patientSlice,
    order: orderSlice,
  },
});
