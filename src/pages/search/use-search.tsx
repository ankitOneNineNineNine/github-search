import { debounce } from "lodash";
import { useEffect, useMemo, useState } from "react";

import { useSearchRepo } from "../../services/api";
import { UseSearchFn } from "./search.types";

/**
 * Paginate Options
 */
export const pageSizeOptions = {
  10: "10",
  25: "25",
  50: "50",
};

/**
 * Sory By Options
 */
export const sortBy = {
  "Most Forks": "forks-desc",
  "Least Forks": "forks-asc",
  "Most Stars": "stars-desc",
  "Least Stars": "stars-asc",
  "Recent Updated": "updated-desc",
  "Oldest Updated": "updated-asc",
};
export const useSearch: UseSearchFn = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sort, setSort] = useState<{ sort: string; order: string }>({
    sort: "forks",
    order: "desc",
  });
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(10);

  const { data, isLoading } = useSearchRepo({
    ...sort,
    q: searchQuery,
    page,
    per_page: perPage,
  });

  /**
   * debounced search (1s after user stops typing)
   */
  const onSearch = useMemo(
    () =>
      debounce((searchTerm = "") => {
        setSearchQuery(searchTerm);
      }, 1000),
    [],
  );

  useEffect(() => {
    return () => {
      onSearch.cancel();
    };
  }, [onSearch]);

  /**
   * Function to Change Sort Query
   * @param {string|number} value
   */

  const onChangeSort = (value: string | number) => {
    setSort({
      ...sort,
      sort: (value as string).split("-")[0],
      order: (value as string).split("-")[1],
    });
  };

  /**
   * Function to change Per Page Paginate Option
   * @param {string|number} value
   */
  const onChangePerPage = (value: number | string) => {
    setPerPage(value as number);
  };

  /**
   * Function to change Page
   * @param {number} page
   */

  const onChangePage = (page: number) => {
    setPage(page);
  };

  const repos = data?.data;

  //max Page set for the fact that github api only allows first 1000 repos result
  const maxPage =
    Math.floor((repos?.total_count || 0) / (perPage || 10)) > 1000 / (perPage || 10)
      ? Math.ceil(1000 / (perPage || 10))
      : Math.ceil((repos?.total_count || 0) / (perPage || 10));

  return {
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
  };
};
