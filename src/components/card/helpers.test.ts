import { showFixedNumber } from "./helpers";

describe("Given showFixedNumber", () => {
  const testCases = [
    {
      number: 1,
      expected: "1",
    },
    {
      number: 10,
      expected: "10",
    },
    {
      number: 100,
      expected: "100",
    },
    {
      number: 1213,
      expected: "1.213k",
    },
    {
      number: 1123124,
      expected: "1.123M",
    },
    {
      number: 11231245,
      expected: "11.231M",
    },
    {
      number: 2132131231,
      expected: "2.132G",
    },
    {
      number: 21321312312,
      expected: "21.321G",
    },
    {
      number: 3213124123121,
      expected: "3.213T",
    },
    {
      number: 3213e53,
      expected: "3.213e+38E",
    },
  ];
  test.each(testCases)("When $number is passed, then $expected is expected", ({ number, expected }) => {
    const result = showFixedNumber(number);
    expect(result).toBe(expected);
  });
});
