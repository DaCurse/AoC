// TODO: Finish docs

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

// eslint-disable-next-line no-unused-vars
export function partTwo(inputs) {
  // TODO: Re-write a clean solution
}
