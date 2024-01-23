import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { mockFetchRepoResponse } from "@/__mocks__";
import { renderWithProviders } from "@/utils/test-utils";

import { SearchViewProps } from "./search.types";
import { SearchView } from "./search-view";

const mockProps = {
  searchQuery: "search quewry",
  onSearch: vi.fn(),
  sort: { sort: "forks", order: "desc" },
  onChangeSort: () => {},
  perPage: 10,
  onChangePerPage: () => {},
  isLoading: false,
  repos: mockFetchRepoResponse,
  onChangePage: () => {},
  maxPage: 100,
  page: 1,
} as unknown as SearchViewProps;

describe("Given SearchView", () => {
  describe("When typed text on search field", () => {
    test("Then onSearch is called", async () => {
      const typedText = "asdsf";
      renderWithProviders(<SearchView {...mockProps} />);
      await userEvent.type(screen.getByRole("searchbox"), typedText);
      await waitFor(() => {
        expect(mockProps.onSearch).toBeCalledWith(typedText);
      });
    });
  });
});
