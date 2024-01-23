export type PaginationProps = {
  maxPage: number;
  onChangePage: (value: number) => void;
  current: number;
};
