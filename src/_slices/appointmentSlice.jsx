import { createSlice } from "@reduxjs/toolkit";

const initialAppointmentState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  appointment: undefined,
  entities: [],
  totalCount: 0,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const appointmentSlice = createSlice({
  name: "Appointment",
  initialState: initialAppointmentState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType == callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    appointmentDatatable: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    appointmentDetail: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.appointment = action.payload.appointment;
    },
    catchError: (state, action) => {
      state.error = `${action.type}:${action.payload.error}`;
      if (action.payload.callType == callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionLoading = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { startCall, appointmentDatatable, appointmentDetail, catchError } = appointmentSlice.actions;

export default appointmentSlice.reducer;
