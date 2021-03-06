import { partOne, partTwo } from '../../solutions/2020/aoc01';
import { product, sum } from '../../util/func';
import getInputs from '../../util/inputs';

describe('Day 1 solution', () => {
  test('Part one: Find a pair that sums to 2020', async () => {
    const inputs = await getInputs(1);
    const { fluff, result } = partOne(inputs);
    console.log('Day 1 Part 1 solution:', result);

    expect(inputs).toEqual(expect.arrayContaining(fluff));
    expect(fluff.reduce(sum)).toEqual(2020);
    expect(fluff.reduce(product)).toEqual(result);
  });

  test('Part two: Find a triplet that sums to 2020', async () => {
    const inputs = await getInputs(1);
    const { fluff, result } = partTwo(inputs);
    console.log('Day 1 Part 2 solution:', result);

    expect(inputs).toEqual(expect.arrayContaining(fluff));
    expect(fluff.reduce(sum)).toEqual(2020);
    expect(fluff.reduce(product)).toEqual(result);
  });
});
