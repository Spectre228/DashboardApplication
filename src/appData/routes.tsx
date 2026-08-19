import DashBoardsPage from "../pages/DashBoardsPage/DashBoardsPage";
import SettingsPage from "../pages/SettingsPage/SettingsPage";
import { Navigate } from "react-router";
import { RouteReckord } from "./types";

export const routes: RouteReckord[] = [
    {name: "DashBoards", path: "/dashBoards", element: <DashBoardsPage/>},
    {name: "Settings", path: "/settings", element: <SettingsPage/>},
    {name: "Other", path: "*", element: <Navigate to="/dashBoards" replace/>},
];