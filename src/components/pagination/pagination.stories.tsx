import type { Meta, StoryObj } from "@storybook/react";

import { Pagination } from ".";
import { PaginationProps } from "./pagination.types";

const meta: Meta<PaginationProps> = {
  component: Pagination,
};

export default meta;
type Story = StoryObj<PaginationProps>;

export const Default: Story = {
  args: {
    maxPage: 5,
    onChangePage: () => {},
    current: 1,
  },
};

export const ManyPages: Story = {
  args: {
    maxPage: 100,
    onChangePage: () => {},
    current: 1,
  },
};
