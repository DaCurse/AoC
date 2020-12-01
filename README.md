# Advent of Code

[![Travis (.com)](https://img.shields.io/travis/com/DaCurse/AoC?label=tests)](https://travis-ci.com/DaCurse/AoC)

My solutions to [AoC](https://adventofcode.com/), organized to folders for each year.

- [Advent of Code](#advent-of-code)
  - [Getting Started](#getting-started)
    - [Inputs](#inputs)
    - [Running](#running)
      - [Install dependencies](#install-dependencies)
      - [Running all tests](#running-all-tests)
      - [Running tests for specific year](#running-tests-for-specific-year)
      - [Running specific test](#running-specific-test)

## Getting Started

### Inputs

Inputs need to be provided in the [inputs](/inputs) directory, with a directory for the year and a file for each day with the name being `{day}.txt`. Example directory strucure:

```
inputs/
`-- 2020
    `-- 1.txt
```

If an input for a test does not exist, it will try to download it from the AoC website which requires being authorized. You can provide a session token (found in your cookies on https://adventofcode.com/) by creating a `.env` file in the root directory with the contents:

```
AOC_SESSION={YOUR SESSION TOKEN}
```

Or by setting the `AOC_SESSION` environment variable.

### Running

#### Install dependencies

```sh
# with yarn
yarn
# with npm
npm i
```

#### Running all tests

```sh
# with yarn
yarn start
# with npm
npm start
```

#### Running tests for specific year

```sh
yarn start 2020
# OR
yarn start {year}
```

#### Running specific test

```sh
yarn start 2020/aoc01
# OR
yarn start {year}/aoc{day}
```
