import { getData } from "../../shared";

type Move = {
  symbols: string[];
  value: number;
};

const winningValues = [-2, 1];
const losingValues = [-1, 2];

const moves: Move[] = [
  {
    symbols: ["A", "X"], // rock
    value: 1,
  },
  {
    symbols: ["B", "Y"], // paper
    value: 2,
  },
  {
    symbols: ["C", "Z"], // scissors
    value: 3,
  }
];

export const moveToValue = (symbol: string): number => {
  const move = moves.find((m: Move) => { return m.symbols.includes(symbol); });
  return (move as Move).value;
};

export const determineWinner = (moveOne: number, moveTwo: number): number => {
  switch (moveOne - moveTwo) {
    case -2:
    case 1:
      return 6;
      break;
    case 0:
      return 3;
      break;
    default:
      return 0;
  }
}

export const compareMoves = (myMove: string, theirMove: string): number => {
  const moveOne = moveToValue(myMove);
  const moveTwo = moveToValue(theirMove);

  return moveOne + determineWinner(moveOne, moveTwo);
};

export const totalScore = (data: string[]) => {
  return data.reduce((acc: number, match: string) => {
    const [theirMove, myMove] = match.split(" ");
    return acc + compareMoves(myMove, theirMove);
  }, 0);
};

const data = getData("02/input.txt");

export default totalScore(data);
