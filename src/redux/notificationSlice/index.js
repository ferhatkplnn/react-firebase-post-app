import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    notifications: [],
    isFetching: true,
  },
  reducers: {
    setNotification: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { setNotification } = notificationSlice.actions;
export default notificationSlice.reducer;
