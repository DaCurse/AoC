import { parseFields, partOne } from '../../solutions/2020/aoc04';
import getInputs from '../../util/inputs';

describe('Day 4 solution', () => {
  test('Part one: Count all passports with at least 8 fields', async () => {
    const inputs = await getInputs(4, parseFields);
    const result = partOne(inputs);
    console.log('Day 4 Part 1 solution:', result);

    expect(result).toMatchSnapshot();
  });
});
