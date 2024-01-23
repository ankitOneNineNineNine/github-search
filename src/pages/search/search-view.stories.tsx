import type { Meta, StoryObj } from "@storybook/react";
import { debounce } from "lodash";

import { mockFetchRepoResponse } from "../../__mocks__";
import { SearchViewProps } from "./search.types";
import { SearchView } from "./search-view";

const meta: Meta<SearchViewProps> = {
  component: SearchView,
};

export default meta;
type Story = StoryObj<SearchViewProps>;

export const WithContent: Story = {
  args: {
    searchQuery: "search quewry",
    onSearch: debounce(() => {}, 0),
    sort: { sort: "forks", order: "desc" },
    onChangeSort: () => {},
    perPage: 10,
    onChangePerPage: () => {},
    isLoading: false,
    repos: mockFetchRepoResponse,
    onChangePage: () => {},
    maxPage: 100,
    page: 1,
  },
};

export const Loading: Story = {
  args: {
    ...WithContent.args,
    isLoading: true,
  },
};
