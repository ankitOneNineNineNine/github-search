import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";
import { CardProps } from "./card.types";

const meta: Meta<CardProps> = {
  component: Card,
};

export default meta;
type Story = StoryObj<CardProps>;

export const Default: Story = {
  args: {
    name: "Card Name",
    stars: 3,
    watchers: 134,
    forks: 12,
    description: "This is a description text",
    last_update: "2023-12-03",
    id: 123,
  },
};
