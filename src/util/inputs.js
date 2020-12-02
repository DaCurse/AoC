import Axios from 'axios';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { parseListOfInts } from './parsers';

const api = Axios.create({
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});

/**
 * Tries to parse and return inputs from cache, sending a request to the AoC
 * website if cache is not found
 * @param {number} day Problem day
 * @param {(raw: string) => unknown} parseInputs Function to parse inputs from
 * file/response
 * @param {year} year AoC year
 * @param {string} saveTo Directory to save file in
 */
export default async function getInputs(
  day,
  parseInputs = parseListOfInts,
  year = new Date().getFullYear(),
  saveTo = join(process.cwd(), 'inputs', year.toString())
) {
  const filePath = join(saveTo, `${day.toString().padStart(2, '0')}.txt`);
  if (existsSync(filePath)) {
    return parseInputs(readFileSync(filePath, 'utf-8'));
  }
  if (!existsSync(saveTo)) {
    mkdirSync(saveTo, { recursive: true });
  }

  const url = `https://adventofcode.com/${year}/day/${day}/input`;
  try {
    const res = await api.get(url);
    writeFileSync(filePath, res.data, 'utf-8');
    return parseInputs(res.data);
  } catch (err) {
    console.error(err.message);
  }
}
