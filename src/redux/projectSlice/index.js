import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, actions) => {
      state.projects = actions.payload;
    },
  },
});

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;
