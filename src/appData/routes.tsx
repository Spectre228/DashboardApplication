import { ReactNode } from "react";
import DashBoardsPage from "../pages/DashBoardsPage/DashBoardsPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import WelcomeMenuPage from "../pages/WelcomeMenuPage/WelcomeMenuPage";

interface routeReckord {
    name: string,
    path: string,
    element: ReactNode,
};

export const routes: routeReckord[] = [
    //{name: "WelcomeMenu", path: "/welcomeMenu", element: <WelcomeMenuPage/>},
    {name: "DashBoards", path: "/dashBoards", element: <DashBoardsPage/>},
    {name: "Settings", path: "/settings", element: <SettingsPage/>},
];