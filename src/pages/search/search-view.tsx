import { Card } from "../../components/card";
import { Dropdown } from "../../components/dropdown";
import { Pagination } from "../../components/pagination";
import { SearchInput } from "../../components/search-input/search-input";
import { Spinner } from "../../components/spinner";
import styles from "./search.module.css";
import { SearchViewProps } from "./search.types";
import { pageSizeOptions, sortBy } from "./use-search";

export const SearchView: React.FC<SearchViewProps> = ({
  searchQuery,
  onSearch,
  sort,
  onChangeSort,
  perPage,
  onChangePerPage,
  isLoading,
  repos,
  onChangePage,
  maxPage,
  page,
}) => (
  <main>
    <header>
      <h2 className={styles.header}>Search Github Repositories</h2>
      <nav className={styles.nav}>
        <SearchInput searchQuery={searchQuery} setSearchQuery={onSearch} />
        <div className={styles.filter}>
          <Dropdown options={sortBy} currentValue={`${sort.sort}-${sort.order}`} changeValue={onChangeSort} />
          <Dropdown options={pageSizeOptions} currentValue={perPage.toString()} changeValue={onChangePerPage} />
        </div>
      </nav>
    </header>
    <section>
      {isLoading && <Spinner />}
      {!isLoading &&
        (repos?.items?.length ? (
          <>
            {repos?.items?.map((repo, i) => (
              <Card
                key={repo.id ?? 0 + (repo.created_at ?? "") + i}
                id={repo.id ?? 0}
                name={repo.full_name}
                stars={repo.stargazers_count}
                watchers={repo.watchers}
                forks={repo.forks}
                description={repo.description}
                last_update={repo.updated_at}
              />
            ))}
            <Pagination maxPage={maxPage} onChangePage={onChangePage} current={page} />
          </>
        ) : (
          <p className={styles.error}>No Data Found, May be search for another?</p>
        ))}
    </section>
  </main>
);
