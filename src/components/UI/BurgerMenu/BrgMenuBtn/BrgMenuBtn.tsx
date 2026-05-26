import styles from "./BrgMenuBtn.module.scss";

//type onClickHandler = () => void

interface BrgMenuBtnPrps {
    onClickFunc: () => void,
    isMenuActive: boolean,
}

const BrgMenuBtn = ({onClickFunc, isMenuActive}: BrgMenuBtnPrps) => {
  return (
    <div className={styles.buttonContainer}>
        <div className={isMenuActive ? styles.buttonClose : styles.button}
             onClick={onClickFunc}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
  )
};

export default BrgMenuBtn;