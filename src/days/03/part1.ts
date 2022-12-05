import { getData } from "../../shared";

export const itemToPriority = (item: string): number => {
  const code = item.charCodeAt(0);
  if (code > 96) {
    return code - 96;
  }
  return code - 38;
};

export const getSharedPriority = (rucksack: string): number => {
  const compartmentSize = rucksack.length / 2;
  const compartmentA = rucksack.slice(0, compartmentSize).split("");
  const compartmentB = rucksack.slice(compartmentSize).split("");

  const sharedItem = compartmentA.filter((item: string) => compartmentB.includes(item)).pop();
  return itemToPriority(sharedItem as string);
};

export const totalPriorities = (data: string[]): number => {
  return data.reduce((acc: number, curr: string) => {
    return acc += getSharedPriority(curr);
  }, 0);
};

const data = getData("03/input.txt");

export default totalPriorities(data);
