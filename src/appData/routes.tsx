import { ReactNode } from "react";
import DashBoardsPage from "../pages/DashBoardsPage/DashBoardsPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";

interface routeReckord {
    name: string,
    path: string,
    element: ReactNode,
};

export const routes: routeReckord[] = [
    {name: "DashBoards", path: "/dashBoards", element: <DashBoardsPage/>},
    {name: "Settings", path: "/settings", element: <SettingsPage/>},
];