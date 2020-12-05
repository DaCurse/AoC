import { partOne, partTwo } from '../../solutions/2020/aoc05';
import getInputs from '../../util/inputs';
import { parseListOfStrings } from '../../util/parsers';

describe('Day 5 solution', () => {
  test('Part one: Find the highest ID seat', async () => {
    const inputs = await getInputs(5, parseListOfStrings);
    const result = partOne(inputs);
    console.log('Day 5 Part 1 solution:', result);

    expect(result).toMatchSnapshot();
  });

  test('Part one: Find your seat (The missing seat)', async () => {
    const inputs = await getInputs(5, parseListOfStrings);
    const result = partTwo(inputs);
    console.log('Day 5 Part 2 solution:', result);

    expect(result).toMatchSnapshot();
  });
});
