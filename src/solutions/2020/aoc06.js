export function partOne(inputs) {
  return inputs.reduce(
    (total, input) => total + new Set(input.replace(/\s/g, '')).size,
    0
  );
}
