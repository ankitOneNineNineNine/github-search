import { act } from "react-dom/test-utils";

import { mockFetchRepoResponse } from "@/__mocks__";
import * as repoFetchModule from "@/services/api/repo/repo";
import { renderHook } from "@/utils/test-utils";

import { useSearch } from "./use-search";

const search = vi.fn().mockImplementation(() => ({
  isLoading: false,
  data: { data: mockFetchRepoResponse },
}));
vi.spyOn(repoFetchModule, "useSearchRepo").mockImplementation(search);

describe("Given useSearch", () => {
  describe("When onChangeSort is called with value", () => {
    test("it splits sort with - and adds respective value to state", () => {
      const { result } = renderHook(() => useSearch());
      act(() => {
        result.current.onChangeSort("forks-desc");
      });
      expect(result.current.sort).toStrictEqual({
        order: "desc",
        sort: "forks",
      });
    });
  });
  describe("When changed page or sort", () => {
    test("it calls the useSearchRepo with changed page and sort value", () => {
      const { result } = renderHook(() => useSearch());
      act(() => {
        result.current.onChangeSort("forks-desc");
        result.current.onChangePage(2);
        result.current.onChangePerPage(50);
      });
      expect(search).toBeCalledWith(
        expect.objectContaining({
          order: "desc",
          page: 1,
          per_page: 50,
          q: "",
          sort: "forks",
        }),
      );
    });
  });

  describe("When results are fetched", () => {
    test.each([
      {
        total_count: 500,
        perPage: 50,
        maxPage: 10,
      },
      {
        total_count: 1000,
        perPage: 20,
        maxPage: 50,
      },
      {
        total_count: 128009,
        perPage: 1,
        maxPage: 1000,
      },
    ])(
      "When total_count is $total_count, perPage is $per_page, then maxPage is $maxPage",
      ({ total_count, perPage, maxPage }) => {
        /**
         * Some random total count value
         */
        const search = vi.fn().mockImplementation(() => ({
          isLoading: false,
          data: {
            data: {
              ...mockFetchRepoResponse,
              total_count,
            },
          },
        }));
        vi.spyOn(repoFetchModule, "useSearchRepo").mockImplementation(search);

        const { result } = renderHook(() => useSearch());

        /** Set Random Per Page value */
        act(() => {
          result.current.onChangePerPage(perPage);
        });

        /** max Page calculated */
        expect(result.current.maxPage).toBe(maxPage);
      },
    );
  });
});
