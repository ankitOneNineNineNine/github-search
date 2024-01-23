import type { Meta, StoryObj } from "@storybook/react";

import { mockRepoDetails } from "../../__mocks__";
import { DetailsViewProps } from "./details.types";
import { DetailsView } from "./details-view";

const meta: Meta<DetailsViewProps> = {
  component: DetailsView,
};

export default meta;
type Story = StoryObj<DetailsViewProps>;

export const WithContent: Story = {
  args: {
    repoDetails: mockRepoDetails,
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
