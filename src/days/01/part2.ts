import { getData } from "../../shared";

const data = getData("01/input.txt");

export const calculateThreeHighest = (data: string[]) => {
  return data
    .reduce((acc: number[][], curr: string) => {
      if (curr !== "") {
        acc[acc.length - 1].push(parseInt(curr, 10));
      } else {
        acc.push([]);
      }
      return acc;
    }, [[]])
    .map((values: number[]) => {
      return values.reduce((acc: number, curr: number) => {
        return acc + curr;
      }, 0);
    }, [])
    .sort((a, b) => { return b - a })
    .slice(0, 3)
    .reduce((acc: number, curr: number) => {
      return acc + curr;
    }, 0);
};

export default calculateThreeHighest(data);
