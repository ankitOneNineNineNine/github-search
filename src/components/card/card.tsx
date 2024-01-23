import { NavLink } from "react-router-dom";

import { Tooltip } from "../tooltip";
import styles from "./card.module.css";
import { CardProps } from "./card.types";
import { showFixedNumber } from "./helpers";

export const Card: React.FC<CardProps> = ({ name, stars, watchers, forks, description, last_update, id }) => (
  <article className={styles["card-container"]} aria-label={name}>
    <div className={styles["container-top"]}>
      <NavLink to={`/details/${id}`} aria-label={name}>
        <p className={styles.name}>{name}</p>
      </NavLink>
      <div className={styles["info-container"]}>
        <Tooltip text={showFixedNumber(stars ?? 0)} icon="fa fa-star" tip="Total Stars" />
        <Tooltip text={showFixedNumber(watchers ?? 0)} icon="fa fa-eye" tip="Total Watchers" />
        <Tooltip text={showFixedNumber(forks ?? 0)} icon="fa fa-code-fork" tip="Total Forks" />
      </div>
    </div>
    <div>
      <p className={styles.description}>{description || "No Description"}</p>
    </div>
    <div className={styles.date}>
      <span>Last Updated On: {last_update ? new Date(last_update).toLocaleDateString() : ""}</span>
    </div>
  </article>
);
