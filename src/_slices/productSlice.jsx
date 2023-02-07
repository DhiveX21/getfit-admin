import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  obj: undefined,
  entities: [],
  master: [],
  facilities: [],
  totalCount: 0,
};

const callTypes = {
  list: "list",
  action: "action",
};

const slice = createSlice({
  name: "Product",
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
    saveMaster: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.master = entities;
    },
    saveFacility: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.facilities = entities;
    },
    saveObject: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.obj = action.payload.data;
    },
    update: (state, action) => {
      state.error = null;
      state.actionLoading = false;
      state.obj = action.payload.data;
      state.entities = state.entities.map((entity) => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },
    delete: (state, action) => {
      state.error = null;
      state.actionLoading = false;
      state.entities = state.entities.filter((el) => el.id !== action.payload.id);
    },
  },
});

export const product = {
  slice,
  callTypes,
};
