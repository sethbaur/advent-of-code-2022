import * as fs from "fs";

export const getData = (filename: string) => {
  const name = `./src/days/${filename}`;
  let file = "";

  try {
    file = fs.readFileSync(name, 'utf8');
  } catch (err) {
    console.error(err);
  }

  const data = file.split('\n');

  if (data[data.length - 1] === "") data.pop();
  return data;
};
