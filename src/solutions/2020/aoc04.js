export function parseFields(raw) {
  return raw.split('\n\n').map((p) => p.split(/\s|:/));
}

export function partOne(inputs) {
  const requiredFields = ['byr', 'iyr', 'eyr', 'hgt', 'hcl', 'ecl', 'pid'];
  return inputs.reduce(
    (acc, passport) =>
      requiredFields.every((field) => passport.includes(field)) ? acc + 1 : acc,
    0
  );
}
