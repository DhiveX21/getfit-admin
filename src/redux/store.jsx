import { configureStore } from "@reduxjs/toolkit";
import {
  patient,
  appointment,
  medicalRecord,
  order,
  notification,
  exercise,
  product,
  therapist,
} from "_slices";
import userSlice from "_slices/userSlice";

export default configureStore({
  reducer: {
    signIn: userSlice,
    patient: patient.slice.reducer,
    order: order.slice.reducer,
    appointment: appointment.slice.reducer,
    medicalRecord: medicalRecord.slice.reducer,
    notification: notification.slice.reducer,
    exercise: exercise.slice.reducer,
    product: product.slice.reducer,
    therapist: therapist.slice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
