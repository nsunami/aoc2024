import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const allNumbers = rawInput.split("   ").flatMap((e) => e.split("\n"))

  const column1 = allNumbers
    .filter((_, index) => index % 2 === 0)
    .map((v) => Number(v))
    .sort()

  const column2 = allNumbers
    .filter((_, index) => index % 2 === 1)
    .map((v) => Number(v))
    .sort()

  return [column1, column2]
}

const part1 = (rawInput: string) => {
  const [column1, column2] = parseInput(rawInput)

  const absDistances = column1.map((v, i) => Math.abs(column2[i] - v))

  const sumDistances = absDistances.reduce((prev, current) => prev + current)

  return sumDistances
}

const part2 = (rawInput: string) => {
  const [column1, column2] = parseInput(rawInput)

  const similarityScores = column1.map((currentNumber) => {
    const appearances = column2.reduce(
      (prev, current) => (current === currentNumber ? prev + 1 : prev),
      0,
    )
    return currentNumber * appearances
  })

  const totalSimilarityScore = similarityScores.reduce(
    (prev, current) => prev + current,
  )

  return totalSimilarityScore
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
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
