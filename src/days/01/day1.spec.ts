import { calculateHighest } from "./part1";
import { calculateThreeHighest } from "./part2";
import { parseData } from "../../shared";

const sampleData = `
1000
2000
3000

4000

5000
6000

7000
8000
9000

10000
`.trim();

const data = parseData(sampleData);

describe("day one", () => {
  test("part 1 succeeds", () => {
    expect(calculateHighest(data)).toBe(24000);
  });

  test("part 2 succeeds", () => {
    expect(calculateThreeHighest(data)).toBe(45000);
  });
});
