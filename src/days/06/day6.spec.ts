import { findMarker } from "./part1";

const example = "mjqjpqmgbljsphdztnvjfqwrcgsmlb";
const example2 = "bvwbjplbgvbhsrlpgdmjqwftvncz";
const example3 = "nppdvjthqldpwncqszvftbrmjlhg";
const example4 = "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg";
const example5 = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw";

describe("day 6, part 1", () => {
  test("part 1", () => {
    expect(findMarker(example, 4)).toBe(7);
    expect(findMarker(example2, 4)).toBe(5);
    expect(findMarker(example3, 4)).toBe(6);
    expect(findMarker(example4, 4)).toBe(10);
    expect(findMarker(example5, 4)).toBe(11);
  });
});

describe("day 6, part 2", () => {
  test("part 2", () => {
    expect(findMarker(example, 14)).toBe(19);
    expect(findMarker(example2, 14)).toBe(23);
    expect(findMarker(example3, 14)).toBe(23);
    expect(findMarker(example4, 14)).toBe(29);
    expect(findMarker(example5, 14)).toBe(26);
  });
});
