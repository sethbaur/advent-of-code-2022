import { getRawData } from "../../shared";
import { findMarker } from "./part1";

const data = getRawData("06/input.txt");

export default findMarker(data, 14);
