export function partOne(inputs) {
  const lineLength = inputs[0].length;
  let x = 0;
  let y = 0;
  let trees = 0;
  while (y < inputs.length - 1) {
    x = (x + 3) % lineLength;
    if (inputs[++y][x] === '#') {
      trees++;
    }
  }

  return trees;
}
