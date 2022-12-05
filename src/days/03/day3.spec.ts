import { getSharedPriority, itemToPriority, totalPriorities } from "./part1";
import { getBadgeGroups, getSharedPriority as getSharedPriority2, badgeTotals } from "./part2";
import { parseData } from "../../shared";

const sampleData = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`.trim();

const data = parseData(sampleData);

describe("day three, part 1", () => {
  test("itemToPriority", () => {
    expect(itemToPriority("p")).toBe(16);
    expect(itemToPriority("L")).toBe(38);
    expect(itemToPriority("P")).toBe(42);
    expect(itemToPriority("v")).toBe(22);
    expect(itemToPriority("t")).toBe(20);
    expect(itemToPriority("s")).toBe(19);
  });

  test("getSharedPriority", () => {
    expect(getSharedPriority(data[0])).toBe(16);
  });

  test("totalPriorities", () => {
    expect(totalPriorities(data)).toBe(157);
  });
});

describe("day three, part 2", () => {
  test("getBadgeGroups", () => {
    const flatArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    const expected = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["10"]];

    const grouped = getBadgeGroups(flatArray);

    expect(grouped).toEqual(expected);
  });

  test("getSharedPriority", () => {
    const group = data.slice(0, 3);
    expect(getSharedPriority2(group)).toBe(18)
  });

  test("badgeTotals", () => {
    expect(badgeTotals(data)).toBe(70);
  });
});
