import { getData } from "../../shared";
import { formatData } from "./part1";

export const range = (start: number, stop: number): number[] => {
  const length = stop - start + 1;
  return [...Array(length).keys()].map((x: number) => start + x);
}

export const countOverlappingPairs = (data: string[]): number => {
  const shifts = formatData(data);
  return shifts.filter((shift: number[][]) => {
    const shift1 = range(shift[0][0], shift[0][1]);
    const shift2 = range(shift[1][0], shift[1][1]);
    return new Set([...shift1, ...shift2]).size < shift1.length + shift2.length;
  }).length;
};

const data = getData("04/input.txt");

export default countOverlappingPairs(data);
