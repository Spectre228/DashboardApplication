import { Route, Routes } from "react-router";
import { routes } from "../appData/routes";

const AppRouter = () => {
  return (
    <Routes>
        {
            routes.map(
                route => <Route path={route.path}
                                element={route.element}/>
            )
        }
    </Routes>
  )
};

export default AppRouter;