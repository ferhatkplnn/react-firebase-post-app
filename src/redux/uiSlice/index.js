import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    toastIsShow: false,
    type: "added", // added, created, logout, login
    message: "Post Created",
  },
  reducers: {
    showToast: (state, action) => {
      const { type, message } = action.payload;
      state.toastIsShow = true;
      state.type = type;
      state.message = message;
    },
    hideToast: (state) => {
      state.toastIsShow = false;
    },
  },
});

export const { showToast, hideToast } = uiSlice.actions;

export default uiSlice.reducer;
