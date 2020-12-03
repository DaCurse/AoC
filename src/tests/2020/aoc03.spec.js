import { partOne } from '../../solutions/2020/aoc03';
import getInputs from '../../util/inputs';
import { parseListOfStrings } from '../../util/parsers';

describe('Day 3 solution', () => {
  test('Part one: Count all trees while following slope of right 3 and down 1', async () => {
    const inputs = await getInputs(3, parseListOfStrings);
    const result = partOne(inputs);
    console.log('Day 3 Part 1 solution:', result);

    expect(result).toMatchSnapshot();
  });
});
