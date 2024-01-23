/// <reference types="vite/client"/>
import { createSerializer } from "@emotion/jest";
import { Meta, StoryFn } from "@storybook/react";
import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { Provider } from "./services/providers";

type StoryFile = {
  default: Meta;
  [name: string]: StoryFn | Meta;
};

//@ts-ignore
expect.addSnapshotSerializer(createSerializer());

describe("Storyshots", async () => {
  const modulesByStoryName = await Promise.all(
    Object.entries(
      import.meta.glob<StoryFile>("/src/**/*.stories.tsx", {
        eager: true,
      }),
    ).map(([key, fn]) => {
      const chunks = key.split("/");
      const filename = chunks[chunks.length - 1];

      let storyName;

      if (filename.match(/index\.stories/)) {
        storyName = chunks[chunks.length - 2];
      } else {
        storyName = filename.replace(/\.stories\..*/, "");
      }

      return [storyName, fn];
    }),
  );
  const modules = modulesByStoryName.map(([name, module]) => ({ name, module }));

  describe.each(modules)("$name", async ({ module }) => {
    try {
      const moduleByStoryName = module as StoryFile;

      test.each(Object.values(composeStories(moduleByStoryName)).map((Story) => [Story.storyName!, Story]))(
        "%s",
        (_, Story) => {
          const { container } = render(
            <Provider>
              <Story />
            </Provider>,
          );
          expect(container).toBeTruthy();
          expect(container).toMatchSnapshot();
        },
      );
    } catch (e) {
      console.log("error while storyshotting", e);
    }
  });
});
