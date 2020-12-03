// Time complexity: O(n)
// Space complexity: O(1)
function solve(map, right, down) {
  let trees = 0;
  for (let i = 0; i * down < map.length; i++) {
    if (map[i * down][(i * right) % map[0].length] === '#') {
      trees++;
    }
  }

  return trees;
}

export function partOne(inputs) {
  return solve(inputs, 3, 1);
}

export function partTwo(inputs) {
  const slopes = [
    [1, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [1, 2],
  ];
  // Calc trees encountered for each slope and multiply them together
  return slopes.reduce((acc, slope) => acc * solve(inputs, ...slope), 1);
}
