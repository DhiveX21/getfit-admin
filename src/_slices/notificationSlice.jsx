import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  obj: undefined,
  entities: [],
  category: [],
  totalCount: 0,
};

const callTypes = {
  list: "list",
  action: "action",
};

const slice = createSlice({
  name: "Notification",
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
    updateSave: (state, action) => {
      state.error = null;
      state.actionLoading = false;
      state.obj = action.payload.data;
      let tempEntities = [];
      state.entities.map((entity) => {
        if (entity.id === action.payload.data.id) {
          tempEntities = [...tempEntities, action.payload.data];
        }
        tempEntities = [...tempEntities, entity];
      });
      state.entities = tempEntities;
    },
    saveCategory: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.category = entities;
    },
  },
});

export const notification = {
  slice,
  callTypes,
}
