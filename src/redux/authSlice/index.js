import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isFetching: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});

export const { setUser, setIsFetching } = authSlice.actions;

export default authSlice.reducer;
