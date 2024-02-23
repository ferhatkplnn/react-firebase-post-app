import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../components/dashboard/Dashboard";
import ProjectDetails from "../components/projects/ProjectDetails";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import CreateProject from "../components/projects/CreateProject";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "../components/shared/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/project/:id", element: <ProjectDetails /> },
      { path: "/signin", element: <SignIn /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/",
        element: <ProtectedRoute />,
        children: [{ path: "/create", element: <CreateProject /> }],
      },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
