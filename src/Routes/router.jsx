import { createBrowserRouter } from "react-router";
import Main from "../layouts/Main";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installed from "../pages/Installed/Installed";
import SingleData from "../components/Apps/SingleData";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, path: "/", element: <Home /> },
      { path: "/apps", element: <Apps /> },
      { path: "/app/:id", element: <SingleData /> },
      { path: "/installation", element: <Installed /> },
    ],
  },
]);
