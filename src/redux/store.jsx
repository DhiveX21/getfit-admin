import { configureStore } from "@reduxjs/toolkit";
import notificationSlice from "_slices/notificationSlice";
import orderSlice from "_slices/orderSlice";
import { patient, appointment, medicalRecord, order } from "_slices";
import userSlice from "_slices/userSlice";
import exerciseSlice from "_slices/exerciseSlice";
import productSlice from "_slices/productSlice";

export default configureStore({
  reducer: {
    signIn: userSlice,
    patient: patient.slice.reducer,
    order: order.slice.reducer,
    appointment: appointment.slice.reducer,
    medicalRecord: medicalRecord.slice.reducer,
    notification: notificationSlice,
    exercise: exerciseSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
