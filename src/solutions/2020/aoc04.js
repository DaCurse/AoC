import { parseListOfGroups } from '../../util/parsers';

/**
 * This abomination parses a list of passports (huge string) seperated by blank lines into objects with keys/values
 * being each field and it's respective value
 * @param {string} raw Raw input (List of passports)
 */
export function parsePassports(raw) {
  return parseListOfGroups(raw).map((passport) => {
    const parts = passport.split(/\s/);
    return parts.reduce((obj, part) => {
      const [key, value] = part.split(':');
      if (key === 'cid' || key.length === 0) return obj;
      return { ...obj, [key]: value };
    }, {});
  });
}

/**
 * Checks if a passport has all required fields
 * @param {string[]} fields Array of fields
 */
function hasAllFields(fields) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return requiredFields.every((field) => fields.includes(field));
}

export function partOne(inputs) {
  // Return the count of all passports with all required fields
  return inputs.filter((passport) => hasAllFields(Object.keys(passport)))
    .length;
}

/**
 * Utility function to convert `value` to String and check if it's within a
 * certain range
 * @param {string} value
 * @param {number} min
 * @param {number} max
 */
function between(value, min, max) {
  return parseInt(value) >= min && parseInt(value) <= max;
}

// Key/value pairs where the key is the field and the value is a function which check if it's valid
const predicates = {
  byr(value) {
    return between(value, 1920, 2002);
  },
  iyr(value) {
    return between(value, 2010, 2020);
  },
  eyr(value) {
    return between(value, 2020, 2030);
  },
  hgt(value) {
    return value.endsWith('cm')
      ? between(value, 150, 193)
      : value.endsWith('in')
      ? between(value, 59, 76)
      : false;
  },
  hcl(value) {
    return /^#[0-9a-f]{6}$/.test(value);
  },
  ecl(value) {
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(value);
  },
  pid(value) {
    return /^[0-9]{9}$/.test(value);
  },
};

export function partTwo(inputs) {
  // Return the count of all passports that have all required fields and field values pass all the predicates
  return inputs.filter(
    (passport) =>
      hasAllFields(Object.keys(passport)) &&
      Object.keys(passport).every((field) => predicates[field](passport[field]))
  ).length;
}
