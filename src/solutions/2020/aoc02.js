const pwRegex = /(\d+)-(\d+)\s(\w):\s(\w+)/;

export function partOne(inputs) {
  return inputs.reduce((acc, input) => {
    // Parse line using regex
    const [, min, max, letter, pw] = input.match(pwRegex);
    // Count occurances
    const count = pw.split(letter).length - 1;

    // Incrementing accumulator if count is within the range
    return count >= Number(min) && count <= Number(max) ? acc + 1 : acc;
  }, 0);
}

export function partTwo(inputs) {
  return inputs.reduce((acc, input) => {
    // Parse line using regex
    const [, pos1, pos2, letter, pw] = input.match(pwRegex);

    // Use XOR to determine if only one of the statements is true and incremenet
    // accumulator accordingly
    return (pw[pos1 - 1] === letter) ^ (pw[pos2 - 1] === letter)
      ? acc + 1
      : acc;
  }, 0);
}
