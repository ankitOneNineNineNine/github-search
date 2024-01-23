import styles from "./search-input.module.css";
import { SearchProps } from "./search-input.types";

export const SearchInput: React.FC<SearchProps> = ({ setSearchQuery }) => (
  <div className={styles["search-container"]}>
    <input
      type="search"
      aria-label="search"
      placeholder="Search Query ..."
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  </div>
);
