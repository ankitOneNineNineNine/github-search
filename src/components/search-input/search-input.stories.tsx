import type { Meta, StoryObj } from "@storybook/react";

import { SearchInput } from "./search-input";
import { SearchProps } from "./search-input.types";

const meta: Meta<SearchProps> = {
  component: SearchInput,
};

export default meta;
type Story = StoryObj<SearchProps>;

export const Default: Story = {
  args: {
    searchQuery: "Search Query This is",
    setSearchQuery: () => {},
  },
};
