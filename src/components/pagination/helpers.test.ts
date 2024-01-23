import { getPaginationData } from "./helpers";

describe("Given getPaginationData", () => {
  test.each([
    {
      current: 1,
      maxPage: 10,
      expected: [0, 5, [0, 1, 2, 3, 4]],
    },
    {
      current: 5,
      maxPage: 20,
      expected: [0, 9, [0, 1, 2, 3, 4, 5, 6, 7, 8]],
    },
    {
      current: 10,
      maxPage: 13,
      expected: [5, 13, [5, 6, 7, 8, 9, 10, 11, 12]],
    },
    {
      current: 50,
      maxPage: 100,
      expected: [45, 54, [45, 46, 47, 48, 49, 50, 51, 52, 53]],
    },
    {
      current: 100,
      maxPage: 100,
      expected: [95, 100, [95, 96, 97, 98, 99]],
    },
  ])("When current is $current, maxPage is $maxPage, then $expected is expected", ({ current, maxPage, expected }) => {
    const result = getPaginationData(current, maxPage);
    expect(result).toStrictEqual(expected);
  });
});
