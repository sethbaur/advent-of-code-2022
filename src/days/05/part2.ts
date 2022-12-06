import { getData } from "../../shared";
import { instructionToArray, separateData, convertDrawingToStacks } from "./part1";

export const makeMoves = (stacks: string[][], instructions: string[]): string[][] => {
  const newStacks = [...stacks];
  for (const inst of instructions) {
    const [count, frm, to] = instructionToArray(inst);
    const items = newStacks[frm - 1].splice(0, count);
    newStacks[to - 1].unshift(...items);
  }
  return newStacks;
};

export const getFinalTopItems = (data: string[]): string => {
  const [drawing, instructions] = separateData(data);
  const stacks = makeMoves(convertDrawingToStacks(drawing), instructions);
  return stacks.map((stack: string[]) => {
    if (stack[0] !== undefined) {
      return stack[0];
    }
    return "";
  }).filter((item: string) => item !== "").join("");
}

const data = getData("05/input.txt");

export default getFinalTopItems(data);
