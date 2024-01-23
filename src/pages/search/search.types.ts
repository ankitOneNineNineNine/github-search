import { DebouncedFunc } from "lodash";

import { FetchRepoResponse } from "../../services/api";

export type UseSearchFn = () => {
  searchQuery: string;
  onSearch: DebouncedFunc<(searchTerm?: string) => void>;
  sort: { sort: string; order: string };
  onChangeSort: (arg: string | number) => void;
  perPage: number;
  onChangePerPage: (arg: string | number) => void;
  isLoading: boolean;
  repos?: FetchRepoResponse;
  onChangePage: (arg: number) => void;
  maxPage: number;
  page: number;
};

export type SearchViewProps = ReturnType<UseSearchFn>;
