import type { Meta, StoryObj } from "@storybook/react";

import { Dropdown } from ".";
import { DropDownProps } from "./dropdown.types";

const meta: Meta<DropDownProps> = {
  component: Dropdown,
};

export default meta;
type Story = StoryObj<DropDownProps>;

export const Default: Story = {
  args: {
    changeValue: () => {},
    currentValue: "10",
    options: { 10: "10", 20: "20" },
  },
};
