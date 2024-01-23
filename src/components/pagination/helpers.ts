/**
 * return ten items at max in one view
 * pageIndex = page - 1
 * if page = 1, return 0 (pageIndex)
 *
 * if current page is 0, maxPage is 5
 * return [0], 1, 2, 3, 4 from = 0, to = 4
 *
 * if current page is 10, maxPage is 100
 * return 6,7,8,9,[10],11,12,13,14,
 *
 * if current page is 5, maxPage is 15
 * return 1,2,3,4,[5],6,7,8,9 from =1 to=9
 *
 * if current page is 10, maxPage is 13
 * return 5,6,7,8,9,[10],11,12 from =1 to=9
 */

export const getPaginationData = (current = 0, maxPage = 0): [number, number, number[]] => {
  const fromPageIndex = current - 5 >= 0 ? current - 5 : 0;
  const toPageIndex = current + 5 <= maxPage ? current + 4 : maxPage;
  const paginationArray: number[] = [];
  for (let i = fromPageIndex; i < toPageIndex; i++) {
    paginationArray[i] = i;
  }
  return [fromPageIndex, toPageIndex, paginationArray.filter((x) => typeof x !== "undefined")];
};
