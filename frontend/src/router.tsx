import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import IntroPage from "./pages/IntroPage";
import Page404 from "./pages/Page404";
import InstallPage from "./pages/InstallPage";
import InstallGuidePage from "./pages/InstallGuidePage";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/intro", element: <IntroPage /> },
  { path: "/install", element: <InstallPage /> },
  { path: "/installguide", element: <InstallGuidePage /> },
  { path: "*", element: <Page404 /> },
]);

export default router;
