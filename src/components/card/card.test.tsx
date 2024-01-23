import { screen } from "@testing-library/react";

import { appHistory, renderWithProviders } from "@/utils/test-utils";

import { Card } from ".";

const mockProps = {
  name: "Card Name",
  stars: 3,
  watchers: 134,
  forks: 12,
  description: "This is a description text",
  last_update: "2023-12-03",
  id: 123,
};

describe("Given Card", () => {
  describe("When clicked on name", () => {
    test("Then user is redirected to details of that card item", () => {
      renderWithProviders(<Card {...mockProps} />);
      expect(appHistory.location.pathname).toBe(`/`);
      screen.getByText(new RegExp(mockProps.name, "i")).click();
      expect(appHistory.location.pathname).toBe(`/details/${mockProps.id}`);
    });
  });
});
