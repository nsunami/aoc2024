import run from "aocrunner"

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((v) => v.split(" ").map((v) => Number(v)))

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const safeReports = input.map((arr) => checkIsSafe(arr))

  const sumSafeReports = safeReports.reduce(
    (prev, current) => prev + (current === true ? 1 : 0),
    0,
  )

  return sumSafeReports
}

function checkIsSafe(input: number[]) {
  const diffs = getDifferences(input)

  // is all negative of positive numbers?
  const allNegative = diffs.every((v) => v <= 0)
  const allPositive = diffs.every((v) => v >= 0)

  // does all differ by at least one?
  const allAtLeastOne = diffs.every((v) => Math.abs(v) >= 1)
  //  does all differ at most three?
  const allAtMostThree = diffs.every((v) => Math.abs(v) <= 3)

  return (allPositive || allNegative) && allAtLeastOne && allAtMostThree
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const safeArrays = input.map((currentArray, index) => {
    if (checkIsSafe(currentArray)) return true

    for (let i = 0; i < currentArray.length; i++) {
      const shorterArray = currentArray.filter(
        (_, indexToRemove) => indexToRemove != i,
      )

      if (checkIsSafe(shorterArray)) return true
    }
    return false
  })

  return safeArrays.filter((v) => v).length
}

function getDifferences(input: number[]) {
  return input
    .map((v, i, arr) => {
      return v - arr[i + 1]
    })
    .slice(0, -1)
}

run({
  part1: {
    tests: [
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        7 6 4 2 1
        `,
        expected: 1,
      },
      {
        input: `
        1 2 7 8 9
        `,
        expected: 0,
      },
      {
        input: `
        9 7 6 2 1
        `,
        expected: 0,
      },
      {
        input: `
        1 3 2 4 5
        `,
        expected: 1,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
