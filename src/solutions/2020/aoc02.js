const splitRegex = /-|\s|: /;

/**
 * @param {string[]} inputs Array of policies
 */
export function partOne(inputs) {
  return inputs.reduce((acc, input) => {
    // Parse line using regex
    const [min, max, letter, pw] = input.split(splitRegex);
    // Count occurances
    const count = pw.split(letter).length - 1;

    // Incrementing accumulator if count is within the range
    return count >= Number(min) && count <= Number(max) ? acc + 1 : acc;
  }, 0);
}

/**
 * @param {string[]} inputs Array of policies
 */
export function partTwo(inputs) {
  return inputs.reduce((acc, input) => {
    // Parse line using regex
    const [pos1, pos2, letter, pw] = input.split(splitRegex);

    // Use XOR to determine if only one of the statements is true and incremenet
    // accumulator accordingly
    return (pw[Number(pos1) - 1] === letter) ^ (pw[Number(pos2) - 1] === letter)
      ? acc + 1
      : acc;
  }, 0);
}
