import { itemToPriority } from "./part1";
import { getData } from "../../shared";

export const getBadgeGroups = (data: string[]): string[][] => {
  return data.reduce((groups: string[][], rucksack: string, index: number) => {
    if (index % 3 == 0) {
      return groups.concat([[rucksack]]);
    }

    const lastGroup = [...(groups.at(-1) as string[])];
    lastGroup.push(rucksack);
    return [...groups.slice(0, -1), lastGroup];
  }, []);
};

export const getSharedPriority = (group: string[]): number => {
  const itemized = group.map((rucksack: string) => rucksack.split(""));
  const sharedItem = itemized[0].filter((item: string) => {
    return itemized.slice(1).every((rucksack: string[]) => rucksack.includes(item));
  }).pop();
  return itemToPriority(sharedItem as string);
};

export const badgeTotals = (data: string[]): number => {
  const groups = getBadgeGroups(data);
  return groups.reduce((total: number, group: string[]): number => {
    return total + getSharedPriority(group);
  }, 0);
};

const data = getData("03/input.txt");

export default badgeTotals(data);
