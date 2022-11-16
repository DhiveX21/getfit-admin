import { createSlice } from "@reduxjs/toolkit";

const initialExerciseState = {
  listLoading: false,
  actionLoading: false,
  error: null,
  video: {
    video: undefined,
    entities: [],
    category: [],
    totalCount: 0,
  },
};

export const callTypes = {
  list: "list",
  action: "action",
};

export const exerciseSlice = createSlice({
  name: "Exercise",
  initialState: initialExerciseState,
  reducers: {
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callType == callTypes.list) {
        state.listLoading = true;
      } else {
        state.actionLoading = true;
      }
    },
    exerciseVideoDataTable: (state, action) => {
      const { entities, totalCount } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.video.entities = entities;
      state.video.totalCount = totalCount;
    },
    exerciseVideoCategory: (state, action) => {
      const { entities } = action.payload;
      state.listLoading = false;
      state.error = null;
      state.video.category = entities;
    },
    videoDetail: (state, action) => {
      state.actionLoading = false;
      state.error = null;
      state.video.video = action.payload.video;
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
export const { startCall, exerciseVideoDataTable, exerciseVideoCategory, videoDetail, catchError } =
  exerciseSlice.actions;

export default exerciseSlice.reducer;
