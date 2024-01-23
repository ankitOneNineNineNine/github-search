import { getPaginationData } from "./helpers";
import styles from "./pagination.module.css";
import { PaginationProps } from "./pagination.types";

export const Pagination: React.FC<PaginationProps> = ({ maxPage, onChangePage, current }) => {
  const [_, toPage, paginationArray] = getPaginationData(current, maxPage);

  return (
    <div className={styles["paginate-container"]}>
      {paginationArray.map((page) => (
        <button
          aria-label={`page ${page + 1}`}
          onClick={() => onChangePage(page + 1)}
          key={page}
          className={styles.pages}
          disabled={page + 1 === current}
          style={page + 1 === current ? { backgroundColor: "#5298E9" } : {}}
        >
          {page + 1}
        </button>
      ))}
      {!!maxPage && current !== maxPage && toPage !== maxPage && (
        <>
          <span className={styles.paginateDots}>....</span>
          <button onClick={() => onChangePage(maxPage)} className={styles.pages} aria-label={`page ${maxPage}`}>
            {maxPage}
          </button>
        </>
      )}
    </div>
  );
};
