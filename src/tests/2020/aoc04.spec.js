import { parsePassports, partOne, partTwo } from '../../solutions/2020/aoc04';
import getInputs from '../../util/inputs';

describe('Day 4 solution', () => {
  test('Part one: Count all passports with at least 7 fields', async () => {
    const inputs = await getInputs(4, parsePassports);
    const result = partOne(inputs);
    console.log('Day 4 Part 1 solution:', result);

    expect(result).toMatchSnapshot();
  });

  test('Part two: Count all passports with valid fields and field values', async () => {
    const inputs = await getInputs(4, parsePassports);
    const result = partTwo(inputs);
    console.log('Day 4 Part 2 solution:', result);

    expect(result).toMatchSnapshot();
  });
});
