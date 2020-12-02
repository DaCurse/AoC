const pwRegex = /(\d+)-(\d+)\s(\w):\s(\w+)/;

export function partOne(inputs) {
  return inputs.reduce((acc, input) => {
    const [, min, max, letter, pw] = input.match(pwRegex);
    const count = pw.split(letter).length - 1;

    return count >= Number(min) && count <= Number(max) ? acc + 1 : acc;
  }, 0);
}
