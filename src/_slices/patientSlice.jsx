import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  obj: undefined,
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

export const slice = createSlice({
  name: "Patient",
  initialState: initialState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    // Redux for stopping
    stopCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionLoading = false;
      }
    },
    catchError: (state, action) => {
      state.error = `${action.type}:${action.payload.error}`;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = false;
      } else {
        state.actionLoading = false;
      }
    },
    saveList: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    saveObject: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.obj = action.payload.data;
    },
    addSomeAppointment: (state, action) => {
      state.listLoading = false;
      state.error = null;
      state.appointment.some = action.payload.appointments;
    },
    addSomeRecord: (state, action) => {
      state.listLoading = false;
      state.error = null;
      state.record.some = action.payload.records;
    },
    
  },
});

export const patient = {
  callTypes,
  slice,
};
