import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projects: [
    { id: "1", title: "help me find peach", content: "bla bla bla" },
    { id: "2", title: "collect all the starts", content: "bla bla bla" },
    { id: "3", title: "egg hunt with yoshi", content: "bla bla bla" },
  ],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
});

export default projectSlice.reducer;
