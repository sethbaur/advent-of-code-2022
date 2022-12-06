import { parseData } from "../../shared";
import { separateData, convertDrawingToStacks, instructionToArray, makeMoves, getFinalTopItems } from "./part1";
import { makeMoves as makeMoves2, getFinalTopItems as getFinalTopItems2 } from "./part2";

const sampleData = `    [D]
[N] [C]
[Z] [M] [P]
 1   2   3

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2
`;

const data = parseData(sampleData);

const expected = [
  [
    "    [D]",
    "[N] [C]",
    "[Z] [M] [P]",
    " 1   2   3",
  ],
  [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2",
  ],
];

describe("day 5, part 1", () => {
  test("separateData", () => {
    const expected = [
      [
        "    [D]",
        "[N] [C]",
        "[Z] [M] [P]",
        " 1   2   3",
      ],
      [
        "move 1 from 2 to 1",
        "move 3 from 1 to 3",
        "move 2 from 2 to 1",
        "move 1 from 1 to 2",
      ],
    ];

    expect(separateData(data)).toEqual(expected);
  });

  test("convertDrawingToStacks", () => {
    const [drawing] = separateData(data);

    const expected = [["N", "Z"], ["D", "C", "M"], ["P"]];

    expect(convertDrawingToStacks(drawing)).toEqual(expected);
  });

  test("instructionToArray", () => {
    expect(instructionToArray("move 4 from 3 to 1")).toEqual([4, 3, 1]);
  });

  test("makeMoves", () => {
    const [drawing, instructions] = separateData(data);
    const stacks = convertDrawingToStacks(drawing);
    expect(makeMoves(stacks, instructions)).toEqual([
      ["C"],
      ["M"],
      ["Z", "N", "D", "P"],
    ]);
  });

  test("getFinalTopItems", () => {
    expect(getFinalTopItems(data)).toBe("CMZ");
  });
});

describe("day 0, part 2", () => {
  test("getFinalTopItems", () => {
    expect(getFinalTopItems2(data)).toBe("MCD");
  });
});
