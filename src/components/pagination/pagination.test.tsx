import { screen } from "@testing-library/react";

import { renderWithProviders } from "@/utils/test-utils";

import { Pagination } from ".";

const mockProps = {
  maxPage: 10,
  onChangePage: vi.fn(),
  current: 2,
};
describe("Given Pagination", () => {
  describe("When page number is clicked", () => {
    test("Then it calls onChangePage with page number clicked", () => {
      renderWithProviders(<Pagination {...mockProps} />);
      const pagePick = 6;
      screen
        .getByRole("button", {
          name: new RegExp(pagePick.toString(), "i"),
        })
        .click();
      expect(mockProps.onChangePage).toBeCalledWith(pagePick);
    });
  });
});
