import { createSlice } from "@reduxjs/toolkit";

const initialOrderState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  order: undefined,
  entities: [],
  totalCount: 0,
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const orderSlice = createSlice({
  name: "Order",
  initialState: initialOrderState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    orderDatatable: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.entities = entities;
      state.totalCount = totalCount;
    },
    orderDetail: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.order = action.payload.order;
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
export const { startCall, orderDatatable, orderDetail, catchError } = orderSlice.actions;

export default orderSlice.reducer;
