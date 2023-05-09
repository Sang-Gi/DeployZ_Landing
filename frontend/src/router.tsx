import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import IntroPage from "./pages/IntroPage";
import Page404 from "./pages/Page404";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/intro", element: <IntroPage /> },
  { path: "*", element: <Page404 /> },
]);

export default router;
