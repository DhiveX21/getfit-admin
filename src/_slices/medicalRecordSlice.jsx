import { createSlice } from "@reduxjs/toolkit";

const initialMedicalRecordState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  medicalRecord: undefined,
  entities: [],
  totalCount: 0,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const medicalRecordSlice = createSlice({
  name: "MedicalRecord",
  initialState: initialMedicalRecordState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    medicalRecordDataTable: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    medicalRecordDetail: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.medicalRecord = action.payload.medicalRecord;
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
export const { startCall, medicalRecordDataTable, medicalRecordDetail, catchError } =
  medicalRecordSlice.actions;

export default medicalRecordSlice.reducer;
