import { DashBoardsPage } from "../../pages/DashBoardsPage";
import { SettingsPage } from "../../pages/SettingsPage";
import { Navigate } from "react-router";

export const routes = [
    {name: "DashBoards", path: "/dashBoards", element: <DashBoardsPage/>},
    {name: "Settings", path: "/settings", element: <SettingsPage/>},
    {name: "Other", path: "*", element: <Navigate to="/dashBoards" replace/>},
];