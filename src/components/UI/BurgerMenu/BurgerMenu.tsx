import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store"
import { toggle } from "../../../store/slices/burgerMenuActivation";
import { NavLink } from "react-router";
import { routes } from "../../../appData/routes";
import BrgMenuBtn from "./BrgMenuBtn/BrgMenuBtn";
import styles from "./BurgerMenu.module.scss";
import { RouteReckord } from "../../../appData/types";

const BurgerMenu = () => {
  const isMenuActive = useSelector((state: RootState) => state.menuActiveness.value);
  const dispatch = useDispatch<AppDispatch>();
  const toggleMenuActiveness = () => dispatch(toggle());

  const linksRenderCallback = (route: RouteReckord) =>
  {
    if (route.name === "Other") {
      return [];
    } else {
      return <NavLink to={route.path}
                      onClick={toggleMenuActiveness}
                      className={({isActive}) =>
                                    isActive ?
                                    styles.linkActive :
                                    styles.link}
              >
                {route.name}
              </NavLink>
    }
  }

  return (
    <div className={isMenuActive ? styles.burgerMenuActive : styles.burgerMenu}>
      <BrgMenuBtn onClickFunc={toggleMenuActiveness} isMenuActive={isMenuActive}/>
      {
        routes.flatMap(linksRenderCallback)
      }
    </div>
  )
};

export default BurgerMenu;