/**
 * Parses a list of strings to an array with a newline as the delimiter, getting
 * rid of empty results
 * @param {string} raw List of strings
 */
export function parseListOfStrings(raw) {
  return raw.split('\n').filter((s) => s);
}

/**
 * Parses list of strings to an array of integers
 * @param {string} raw List of strings
 */
export function parseListOfInts(raw) {
  return parseListOfStrings(raw).map((n) => parseInt(n, 10));
}
