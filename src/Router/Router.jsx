import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/dashboard/Dashboard";
import ProjectDetails from "../components/projects/ProjectDetails";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CreateProject from "../components/projects/CreateProject";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/project/:id", element: <ProjectDetails /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/create", element: <CreateProject /> },
    ],
  },
]);
