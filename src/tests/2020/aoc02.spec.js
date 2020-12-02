import { partOne } from '../../solutions/2020/aoc02';
import getInputs from '../../util/inputs';
import { parseListOfStrings } from '../../util/parsers';

describe('Day 2 solution', () => {
  test('Part one', async () => {
    const inputs = await getInputs(2, parseListOfStrings);
    const result = partOne(inputs);
    console.log('Day 2 Part 1 solution:', result);

    expect(result).toMatchSnapshot();
  });
});
