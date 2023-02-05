import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  obj: undefined,
  entities: [],
  totalCount: 0,
};

const callTypes = {
  list: "list",
  action: "action",
};

const slice = createSlice({
  name: "Order",
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
  },
});

export const order = {
  slice,
  callTypes,
};
