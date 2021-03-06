/**
 * Parses a list of strings to an array with a newline as the delimiter, getting
 * rid of empty results
 * @param {string} raw List of strings
 */
export function parseListOfStrings(raw) {
  return raw.split(/\r?\n/).filter((s) => s);
}

/**
 * Parses a list of groups seperated each by a blank line
 * @param {string} raw List of groups
 */
export function parseListOfGroups(raw) {
  return raw.split(/(?:\r?\n){2}/).filter((s) => s);
}

/**
 * Parses a list of groups seperated by a blank line into an array with an array
 * for each group containing each line in the group
 * @param {raw} raw List of line groups
 */
export function parseListOfLineGroups(raw) {
  return parseListOfGroups(raw).map(parseListOfStrings);
}

/**
 * Parses list of strings to an array of integers
 * @param {string} raw List of strings
 */
export function parseListOfInts(raw) {
  return parseListOfStrings(raw).map((n) => parseInt(n, 10));
}
