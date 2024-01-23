import styles from "./spinner.module.css";

export const Spinner = () => (
  <div className={styles["loading-overlay"]} aria-label="spinner">
    <div className={styles.loader}></div>
  </div>
);
