import { getData } from "../../shared";

export const formatData = (data: string[]): number[][][] => {
  return data.map((row: string) => {
    const shifts = row.split(",");
    return shifts.map((shift: string) => {
      const [start, end] = shift.split("-");
      return [parseInt(start, 10), parseInt(end, 10)];
    });
  });
};

export const countRedundantPairs = (data: string[]): number => {
  const shifts = formatData(data);
  return shifts.filter((shift: number[][]) => {
    return (shift[0][0] <= shift[1][0] && shift[0][1] >= shift[1][1])
      || (shift[1][0] <= shift[0][0] && shift[1][1] >= shift[0][1]);
  }).length;
};

const data = getData("04/input.txt");

export default countRedundantPairs(data);
