import styles from "./dropdown.module.css";
import { DropDownProps } from "./dropdown.types";

export const Dropdown: React.FC<DropDownProps> = ({ options, currentValue, changeValue }) => (
  <div>
    <select className={styles.select} onChange={(e) => changeValue(e.target.value)} defaultValue={currentValue}>
      {Object.keys(options).map((sort) => {
        return (
          <option key={options[sort]} value={options[sort]}>
            {sort}
          </option>
        );
      })}
    </select>
  </div>
);
