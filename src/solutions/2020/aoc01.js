// Time complexity: O(n)? Depends on the implementation of `Set`
// Space complexity: O(n) We use a set to store previous numbers
export function partOne(inputs) {
  const target = 2020;
  // We will store numbers in a set until we find our solution
  const prev = new Set();

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

// Time complexity: O(n^2) Two nested loops going over the input
// Space complexity: O(1) No extra space is used
export function partTwo(inputs) {
  const target = 2020;
  // Quick sort numbers
  inputs.sort();

  for (let i = 0; i < inputs.length; ++i) {
    // We start adding elements from the corners, moving right if the sum is
    // too small or left if the sum is too large
    let left = i + 1;
    let right = inputs.length - 1;

    while (left < right) {
      const sum = inputs[i] + inputs[left] + inputs[right];
      if (sum === target) {
        return {
          fluff: [inputs[i], inputs[left], inputs[right]],
          result: inputs[i] * inputs[left] * inputs[right],
        };
      } else if (sum <= target) {
        left++;
      } else {
        right--;
      }
    }
  }
}
