import React from "react";
import type { Preview } from "@storybook/react";
import { Provider } from "../src/services/providers";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <Provider>
        <Story />
      </Provider>
    ),
  ],
};

export default preview;
