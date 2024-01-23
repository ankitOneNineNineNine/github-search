import type { Meta, StoryObj } from "@storybook/react";

import { Tooltip } from ".";
import { TooltipProps } from "./tooltip.types";

const meta: Meta<TooltipProps> = {
  component: Tooltip,
};

export default meta;
type Story = StoryObj<TooltipProps>;

export const Default: Story = {
  args: {
    text: "tooltip text",
    icon: "fa fa-star",
    tip: "tip",
  },
  render: (args) => (
    <div style={{ marginTop: "20px" }}>
      <Tooltip {...args} />
    </div>
  ),
};

export const VisibleTooltip: Story = {
  ...Default,
  args: {
    ...Default.args,
    showTooltip: true,
  },
};
