import { configureStore } from "@reduxjs/toolkit";
import medicalRecordSlice from "_slices/medicalRecordSlice";
import notificationSlice from "_slices/notificationSlice";
import orderSlice from "_slices/orderSlice";
import { patient, appointment } from "_slices";
import userSlice from "_slices/userSlice";
import exerciseSlice from "_slices/exerciseSlice";
import productSlice from "_slices/productSlice";

export default configureStore({
  reducer: {
    signIn: userSlice,
    patient: patient.slice.reducer,
    order: orderSlice,
    appointment: appointment.slice.reducer,
    medicalRecord: medicalRecordSlice,
    notification: notificationSlice,
    exercise: exerciseSlice,
    product: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
