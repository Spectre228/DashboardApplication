import { useSelector, useDispatch } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { toggleBarchartShow, toggleRadarchartsShow } from "../../store/slices/Settings"
import SlidingHeader from "../../components/SlidingHeader/SlidingHeader";
import BurgerMenu from "../../components/UI/BurgerMenu/BurgerMenu";
import styles from "./SettingsPage.module.scss";
import { ChangeEvent } from "react";


const SettingsPage = () => {
  const settingsState = useSelector((state: RootState) => state.settings.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div style={{width: "100%"}}>
      <BurgerMenu/>
      <div className={styles.chartDisplayControlsLayout}>
        <SlidingHeader headerType="h3"
                       title="Charts Display Settings"
                       style={{marginLeft: "10px", marginBottom: "5px"}}
        />
        <div className={styles.controlsArea}>
          <div>
            <input type="checkbox"
                   id="ToggleBarchartShow"
                   checked={settingsState.showBarchart}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(toggleBarchartShow(e.target.checked))}
            />
            <label htmlFor="ToggleBarchartShow">Show Barchart</label>
          </div>
          <div>
            <input type="checkbox"
                   id="ToggleRadarchartShow"
                   checked={settingsState.showRadarcharts}
                   onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch(toggleRadarchartsShow(e.target.checked))}
            />
            <label htmlFor="ToggleRadarchartShow">Show Radarcharts</label>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SettingsPage;