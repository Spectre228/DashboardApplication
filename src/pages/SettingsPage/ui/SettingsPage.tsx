import { useDispatchDistrib, useSliceSelector, } from "../../../shared";
import { toggleBarchartShow, toggleRadarchartsShow, } from "../model/Settings";
import { SlidingHeader } from "../../../shared";
import styles from "./SettingsPage.module.scss";
import { ChangeEvent } from "react";


const SettingsPage = () => {
  const settingsState = useSliceSelector((state) => state.settings.value);
  const dispatch = useDispatchDistrib();

  const dispatchBarchartShowToggle = (e: ChangeEvent<HTMLInputElement>) =>
                                         dispatch(toggleBarchartShow(e.target.checked)) ;

  const dispatchRadarchartsShowToggle = (e: ChangeEvent<HTMLInputElement>) =>
                                            dispatch(toggleRadarchartsShow(e.target.checked)) ;

  return (
    <div style={{width: "100%"}}>
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
                   onChange={dispatchBarchartShowToggle}
            />
            <label htmlFor="ToggleBarchartShow">Show Barchart</label>
          </div>
          <div>
            <input type="checkbox"
                   id="ToggleRadarchartShow"
                   checked={settingsState.showRadarcharts}
                   onChange={dispatchRadarchartsShowToggle}
            />
            <label htmlFor="ToggleRadarchartShow">Show Radarcharts</label>
          </div>
        </div>
      </div>
    </div>
  )
};

export default SettingsPage;