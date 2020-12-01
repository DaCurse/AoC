export function partOne(inputs) {
  // We will store numbers in a set until we find our solution
  const prev = new Set();
  const target = 2020;

  for (let i = 0; i < inputs.length; ++i) {
    const input = inputs[i];

    // If a number exists in the set who is the difference between the target
    // and the current number, we found our pair
    if (!prev.has(target - input)) {
      prev.add(input);
    } else {
      return {
        // Returning the pair alongisde the result for propery testing
        fluff: [target - input, input],
        result: (target - input) * input,
      };
    }
  }
}
