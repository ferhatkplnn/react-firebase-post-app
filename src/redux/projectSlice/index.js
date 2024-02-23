import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createProject } from "../../firebase/Actions";

export const createProjectAsync = createAsyncThunk(
  "project/createProjectAsync",
  createProject
);

const initialState = {
  projects: [],
  isLoading: false, // for create project
  isFetching: true, // for dashboard
  error: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, actions) => {
      state.projects = actions.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProjectAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProjectAsync.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(createProjectAsync.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const selectProjectById = (state, id) => {
  const { projects } = state.project;
  return projects.find((project) => project.id === id);
};

export const { setProjects, setIsFetching } = projectSlice.actions;

export default projectSlice.reducer;
