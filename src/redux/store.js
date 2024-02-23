import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import projectReducer from "./projectSlice";
import notificationReducer from "./notificationSlice";
import uiReducer from "./uiSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
    notification: notificationReducer,
    ui: uiReducer,
  },
});
