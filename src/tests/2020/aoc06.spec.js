import { partOne, partTwo } from '../../solutions/2020/aoc06';
import getInputs from '../../util/inputs';
import { parseListOfGroups } from '../../util/parsers';

describe('Day 6 solution', () => {
  test('Part one: Find the sum of questions for each group', async () => {
    const inputs = await getInputs(6, parseListOfGroups);
    const result = partOne(inputs);
    console.log('Day 6 Part 1 solution:', result);

    expect(result).toMatchSnapshot();
  });

  test('Part one: Find the sum of unanimous questions for each group', async () => {
    const inputs = await getInputs(6, parseListOfGroups);
    const result = partTwo(inputs);
    console.log('Day 6 Part 2 solution:', result);

    expect(result).toMatchSnapshot();
  });
});
