import { parseData } from "../../shared";
import { formatData, countRedundantPairs } from "./part1";
import { range, countOverlappingPairs } from "./part2";

const sampleData = `
2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8
`.trim();

const data = parseData(sampleData);

describe("day four, part 1", () => {
  test("formatData", () => {
    const expected = [
      [[2, 4], [6, 8]],
      [[2, 3], [4, 5]],
      [[5, 7], [7, 9]],
      [[2, 8], [3, 7]],
      [[6, 6], [4, 6]],
      [[2, 6], [4, 8]],
    ];
    expect(formatData(data)).toEqual(expected);
  });

  test("countRedundantPairs", () => {
    expect(countRedundantPairs(data)).toBe(2);
  });
});

describe("day four, part 1", () => {
  test("range", () => {
    expect(range(2, 5)).toEqual([2, 3, 4, 5]);
  });

  test("countOverlappingPairs", () => {
    expect(countOverlappingPairs(data)).toBe(4);
  });
});
