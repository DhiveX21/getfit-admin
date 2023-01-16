import { createSlice } from "@reduxjs/toolkit";

const initialProductState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  product: {
    product: undefined,
    entities: [],
    master: [],
    facilities: [],
    totalCount: 0,
  },
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const ProductSlice = createSlice({
  name: "Product",
  initialState: initialProductState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType === callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    productDataTable: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.product.entities = entities;
      state.product.totalCount = totalCount;
    },
    masterProduct: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.product.master = entities;
    },
    facilityProduct: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.product.facilities = entities;
    },
    productDetail: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.product.product = action.payload.product;
    },
    productUpdated: (state, action) => {
      state.error = null;
      state.actionLoading = false;
      state.product.product = action.payload.data;
      state.product.entities = state.product.entities.map((entity) => {
        if (entity.id === action.payload.data.id) {
          return action.payload.data;
        }
        return entity;
      });
    },
    productDeleted: (state, action) => {
      state.error = null;
      state.actionLoading = false;
      state.entities = state.product.entities.filter(el => el.id !== action.payload.id);
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
  productDataTable,
  masterProduct,
  facilityProduct,
  productUpdated,
  productDeleted,
  productDetail,
  catchError,
} = ProductSlice.actions;

export default ProductSlice.reducer;
