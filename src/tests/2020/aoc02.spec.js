import { partOne, partTwo } from '../../solutions/2020/aoc02';
import getInputs from '../../util/inputs';
import { parseListOfStrings } from '../../util/parsers';

describe('Day 2 solution', () => {
  test('Part one: Find all passwords where a letter occurs within a given range', async () => {
    const inputs = await getInputs(2, parseListOfStrings);
    const result = partOne(inputs);
    console.log('Day 2 Part 1 solution:', result);

    expect(result).toMatchSnapshot();
  });

  test('Part two: Find all passwords where a letter is only in one of 2 given positions', async () => {
    const inputs = await getInputs(2, parseListOfStrings);
    const result = partTwo(inputs);
    console.log('Day 2 Part 2 solution:', result);

    expect(result).toMatchSnapshot();
  });
});
