import { getRawData } from "../../shared";

export const findMarker = (dataStream: string, length: number): number => {
  const buffer = dataStream.split("");
  for (let i = length - 1; i < buffer.length; i++) {
    const marker = buffer.slice(i - (length - 1), i + 1);
    if ((new Set(marker)).size === length) {
      return i + 1
    }
  }
  return -1;
};

const data = getRawData("06/input.txt");

export default findMarker(data, 4);
