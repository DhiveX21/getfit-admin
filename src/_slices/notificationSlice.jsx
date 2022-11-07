import { createSlice } from "@reduxjs/toolkit";

const initialNotificationState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  notification: undefined,
  entities: [],
  category: [],
  totalCount: 0,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const notificationSlice = createSlice({
  name: "Notification",
  initialState: initialNotificationState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType == callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    notificationDataTable: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    notificationCategory: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.category = entities;
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
export const { startCall, notificationDataTable, notificationCategory, catchError } =
  notificationSlice.actions;

export default notificationSlice.reducer;
