import { toggle } from "../model/burgerMenuActivation";
import { NavLink } from "react-router";
import { routes, useDispatchDistrib, useSliceSelector, } from "../../../shared";
import BrgMenuBtn from "./BrgMenuBtn/BrgMenuBtn";
import styles from "./BurgerMenu.module.scss";
import { RouteReckord } from "../../../shared";

const BurgerMenu = () => {
  const isMenuActive = useSliceSelector((state) => state.menuActiveness.value);
  const dispatch = useDispatchDistrib();
  
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