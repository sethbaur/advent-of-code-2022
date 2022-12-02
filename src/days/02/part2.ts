import { getData } from "../../shared";
import { compareMoves } from "./part1";

const moves: {[key: string]: {[key: string]: string }} = {
  "A": {
    win: "B",
    lose: "C",
  },
  "B": {
    win: "C",
    lose: "A",
  },
  "C": {
    win: "A",
    lose: "B",
  },
}

export const chooseMove = (theirMove: string, instruction: string): string => {
  switch (instruction) {
    case "X":
      return moves[theirMove].lose;
      break;
    case "Y":
      return theirMove;
      break;
    default:
      return moves[theirMove].win;
  }
};

export const totalScore = (data: string[]) => {
  return data.reduce((acc: number, match: string) => {
    const [theirMove, instruction] = match.split(" ");
    const myMove = chooseMove(theirMove, instruction);
    return acc + compareMoves(myMove, theirMove);
  }, 0);
};

const data = getData("02/input.txt");

export default totalScore(data);
