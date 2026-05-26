import { Navigate, Route, Routes } from "react-router";
import { routes } from "../appData/routes";
import WelcomeMenuPage from "../pages/WelcomeMenuPage/WelcomeMenuPage";

const AppRouter = () => {
  return (
    <Routes>
        {
            routes.map(
                route => <Route path={route.path}
                                element={route.element}/>
            )
        }

        <Route path="*" element={<WelcomeMenuPage/>}/>
    </Routes>
  )
};

export default AppRouter;