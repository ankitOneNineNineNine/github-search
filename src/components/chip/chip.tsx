import styles from "./chip.module.css";

export const Chip = ({ text = "" }) => {
  return <div className={styles.chip}>{text}</div>;
};
