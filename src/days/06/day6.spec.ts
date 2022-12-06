import { findMarker } from "./part1";

const example = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
const example2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const example3 = "nppdvjthqldpwncqszvftbrmjlhg";
const example4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const example5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

describe("day 6, part 1", () => {
  test("part 1", () => {
    expect(findMarker(example)).toBe(7);
    expect(findMarker(example2)).toBe(5);
    expect(findMarker(example3)).toBe(6);
    expect(findMarker(example4)).toBe(10);
    expect(findMarker(example5)).toBe(11);
  });
});

describe("day 6, part 2", () => {
  test("part 2", () => {
    expect(1 + 1).toBe(2);
  });
});
