import run from "aocrunner"

const parseInput = (rawInput: string) => {
  const multiplierExpression = /mul\(\d+,\d+\)/g

  return rawInput.match(multiplierExpression)
}

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput) as string[]

  const results = input.map((v) => {
    const numbers = v.match(/\d+/g) as string[]
    return Number(numbers[0]) * Number(numbers[1])
  })

  const sum = results.reduce((accumulator, current) => accumulator + current, 0)
  return sum
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return
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
