import { getRawData } from "../../shared";

export const findMarker = (dataStream: string): number => {
  const buffer = dataStream.split("");
  for (let i = 3; i < buffer.length; i++) {
    const marker = buffer.slice(i - 3, i + 1);
    if ((new Set(marker)).size === 4) {
      return i + 1
    }
  }
  return -1;
};

const data = getRawData("06/input.txt");

export default findMarker(data);
