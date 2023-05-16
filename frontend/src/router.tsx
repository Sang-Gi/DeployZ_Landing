import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import IntroPage from "./pages/IntroPage";
import Page404 from "./pages/Page404";
import InstallGuidePage from "./pages/InstallGuidePage";
import CheckList from "@components/InstallGuide/CheckList";
import DockerInstall from "@components/InstallGuide/DockerInstall";
import DeployzInstall from "@components/InstallGuide/DeployzInstall";

const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/intro", element: <IntroPage /> },
  { path: "/install", element: <InstallGuidePage /> },
  { path: "/install/check", element: <CheckList /> },
  { path: "/install/docker", element: <DockerInstall /> },
  { path: "/install/deployz", element: <DeployzInstall /> },
  { path: "*", element: <Page404 /> },
]);

export default router;
