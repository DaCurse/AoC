export function parseListOfStrings(raw) {
  return raw.split('\n');
}

export function parseListOfNumbers(raw) {
  return raw.split('\n').map((n) => parseInt(n, 10));
}
