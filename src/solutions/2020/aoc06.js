import { parseListOfStrings } from '../../util/parsers';

export function partOne(inputs) {
  return inputs.reduce(
    (total, input) => total + new Set(input.replace(/\s/g, '')).size,
    0
  );
}

export function partTwo(inputs) {
  return inputs.reduce((total, input) => {
    const unanimous = parseListOfStrings(input)
      .map((s) => Array.from(s))
      .reduce((intersection, answers) =>
        intersection.filter((a) => answers.includes(a))
      );
    return total + unanimous.length;
  }, 0);
}
