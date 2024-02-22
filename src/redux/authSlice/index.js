import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    userDetail: {},
    isFetching: true,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
    setUserDetail: (state, action) => {
      state.userDetail = action.payload;
    },
  },
});

export const { setUser, setIsFetching, setUserDetail } = authSlice.actions;

export default authSlice.reducer;
