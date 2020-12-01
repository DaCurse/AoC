import Axios from 'axios';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { parseListOfNumbers } from './parsers';

const api = Axios.create({
  headers: {
    Cookie: `session=${process.env.AOC_SESSION}`,
  },
});

/**
 * Tries to parse and return inputs from cache, sending a request to the AoC
 * website if cache is not found
 * @param {number} day Problem day
 * @param {year} year AoC year
 * @param {string} saveTo Directory to save file in
 * @param {(raw: string) => unknown} parseInputs Function to parse inputs from
 * file/response
 */
export default async function getInputs(
  day,
  year = new Date().getFullYear(),
  saveTo = join(process.cwd(), 'inputs', year.toString()),
  parseInputs = parseListOfNumbers
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
