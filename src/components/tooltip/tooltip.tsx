import React, { useState } from "react";

import styles from "./tooltip.module.css";
import { TooltipProps } from "./tooltip.types";

export const Tooltip: React.FC<TooltipProps> = ({ icon, text, tip, showTooltip = false }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState<boolean>(showTooltip);
  return (
    <div className={styles["tooltip-container"]}>
      <div onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)}>
        <i className={icon} /> {text}
      </div>
      {isTooltipVisible && <div className={styles.tooltip}>{tip}</div>}
    </div>
  );
};
