import { configureStore } from "@reduxjs/toolkit";
import { patient, appointment, medicalRecord, order, notification, exercise } from "_slices";
import userSlice from "_slices/userSlice";
import productSlice from "_slices/productSlice";

export default configureStore({
  reducer: {
    signIn: userSlice,
    patient: patient.slice.reducer,
    order: order.slice.reducer,
    appointment: appointment.slice.reducer,
    medicalRecord: medicalRecord.slice.reducer,
    notification: notification.slice.reducer,
    exercise: exercise.slice.reducer,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
