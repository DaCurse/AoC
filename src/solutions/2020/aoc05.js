const map = {
  B: '1',
  R: '1',
  F: '0',
  L: '0',
};

function calcIDs(inputs) {
  return inputs.map((input) =>
    parseInt(
      input.replace(/[BR]|[FL]/g, (char) => map[char]),
      2
    )
  );
}

export function partOne(inputs) {
  return Math.max(...calcIDs(inputs));
}

export function partTwo(inputs) {
  const xor = (a, b) => a ^ b;
  const ids = calcIDs(inputs);
  const max = Math.max(...ids);
  const min = Math.min(...ids);

  return (
    ids.reduce(xor) ^
    Array.from({ length: max }, (_, i) => i + 1).reduce(xor) ^
    Array.from({ length: min - 1 }, (_, i) => i + 1).reduce(xor)
  );
}
