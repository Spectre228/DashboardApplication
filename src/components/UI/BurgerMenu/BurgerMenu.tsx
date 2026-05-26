import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store/store"
import { toggle } from "../../../store/slices/burgerMenuActivation";
import { NavLink } from "react-router";
import { routes } from "../../../appData/routes";
import BrgMenuBtn from "./BrgMenuBtn/BrgMenuBtn";
import styles from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  const isMenuActive = useSelector((state: RootState) => state.menuActiveness.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className={isMenuActive ? styles.burgerMenuActive : styles.burgerMenu}>
      <BrgMenuBtn onClickFunc={() => dispatch(toggle())} isMenuActive={isMenuActive}/>
      {
        routes.map(
          route =>
          <NavLink to={route.path}
                   onClick={() => dispatch(toggle())}
                   className={({isActive}) =>
                                isActive ?
                                styles.linkActive :
                                styles.link}
          >
            {route.name}
          </NavLink>
        )
      }
    </div>
  )
};

export default BurgerMenu;