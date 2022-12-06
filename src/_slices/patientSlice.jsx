import { createSlice } from "@reduxjs/toolkit";

const initialPatientState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  patient: undefined,
  appointment: {
    some: [],
    one: undefined,
  },
  record: {
    some: [],
    one: undefined,
  },
  entities: [],
  totalCount: 0,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const patientSlice = createSlice({
  name: "Patient",
  initialState: initialPatientState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    patientDatatable: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    patientDetail: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.patient = action.payload.patient;
    },
    patientSomeAppointment: (state, action) => {
      state.listLoading = false;
      state.error = null;
      state.appointment.some = action.payload.appointments;
    },
    patientSomeRecord: (state, action) => {
      state.listLoading = false;
      state.error = null;
      state.record.some = action.payload.records;
    },
    catchError: (state, action) => {
      state.error = `${action.type}:${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionLoading = false;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  startCall,
  patientDatatable,
  patientDetail,
  patientSomeAppointment,
  patientSomeRecord,
  catchError,
} = patientSlice.actions;

export default patientSlice.reducer;
