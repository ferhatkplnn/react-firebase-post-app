import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

export const createProjectAsync = createAsyncThunk(
  "project/createProjectAsync",
  async (data) => {
    const res = await addDoc(collection(db, "projects"), {
      ...data,
    });
    console.log(res);
  }
);

const initialState = {
  projects: [],
  isLoading: false,
  error: false,
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, actions) => {
      state.projects = actions.payload;
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

export const { setProjects } = projectSlice.actions;

export default projectSlice.reducer;
