import { getSharedPriority, itemToPriority, totalPriorities } from "./part1";
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
