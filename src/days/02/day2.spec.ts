import { moveToValue, totalScore, compareMoves, determineWinner } from "./part1";
import { chooseMove, totalScore as totalScore2 } from "./part2";
import { parseData } from "../../shared";

const sampleData = `
A Y
B X
C Z
`.trim();

const data = parseData(sampleData);

describe("day two, part 1", () => {
  test("moveToValue", () => {
    expect(moveToValue("A")).toBe(1);
    expect(moveToValue("Z")).toBe(3);
  });

  test("determineWinner", () => {
    expect(determineWinner(2, 3)).toBe(0);
    expect(determineWinner(2, 1)).toBe(6);
    expect(determineWinner(1, 1)).toBe(3);
  });

  test("compareMoves", () => {
    expect(compareMoves("X", "C")).toBe(7);
    expect(compareMoves("Y", "A")).toBe(8);
    expect(compareMoves("Y", "B")).toBe(5);
  });

  test("part 1 returns total score", () => {
    expect(totalScore(data)).toBe(15);
  });
});

describe("day two, part 2", () => {
  test("chooseMove", () => {
    expect(chooseMove("A", "X")).toBe("C");
    expect(chooseMove("A", "Y")).toBe("A");
    expect(chooseMove("A", "Z")).toBe("B");
  });

  test("part 2 returns total score", () => {
    expect(totalScore2(data)).toBe(12);
  });
});
