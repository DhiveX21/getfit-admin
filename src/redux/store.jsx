import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from "_slices/appointmentSlice";
import medicalRecordSlice from "_slices/medicalRecordSlice";
import notificationSlice from "_slices/notificationSlice";
import orderSlice from "_slices/orderSlice";
import patientSlice from "_slices/patientSlice";
import userSlice from "_slices/userSlice";

export default configureStore({
  reducer: {
    signIn: userSlice,
    patient: patientSlice,
    order: orderSlice,
    appointment: appointmentSlice,
    medicalRecord: medicalRecordSlice,
    notification: notificationSlice,
  },
});
