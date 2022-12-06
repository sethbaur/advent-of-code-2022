import { getData } from "../../shared";

export const separateData = (data: string[]): string[][] => {
  const separator = data.findIndex((row: string) => row === "");
  const drawing = data.slice(0, separator);
  const instructions = data.slice(separator + 1);
  return [drawing, instructions];
};

export const convertDrawingToStacks = (drawing: string[]) => {
  const count = (drawing.at(-1) as string).split(/\s/).filter((x: string) => x !== "").length;
  const stacks: string[][] = Array.from({ length: count }, () => []);
  const stackIndices = Array.from({ length: count }, (_, i: number) => {
    return 1 + (i * 4);
  });
  for (const row of drawing.slice(0, -1)) {
    for (const [stack, index] of stackIndices.entries()) {
      const item = row.at(index);
      if (item !== undefined && item !== " ") {
        stacks[stack].push(item);
      }
    }
  }
  return stacks;
};

export const instructionToArray = (instruction: string): number[] => {
  const regex = /\move (\d+) from (\d+) to (\d+)/;
  return (regex.exec(instruction) as string[]).slice(1).map((x: string) => parseInt(x, 10));
};

export const makeMoves = (stacks: string[][], instructions: string[]) => {
  const newStacks = [...stacks];
  for (const inst of instructions) {
    const [count, frm, to] = instructionToArray(inst);
    for (let i = 0; i < count; i++) {
      newStacks[to - 1].unshift(newStacks[frm - 1].shift() as string);
    }
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
