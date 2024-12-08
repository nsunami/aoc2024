import run from "aocrunner"

const parseInput = (rawInput: string) => {
  return rawInput
}

const part1 = (rawInput: string) => {
  const multiplierExpression = /mul\(\d+,\d+\)/g

  const multipliers = rawInput.match(multiplierExpression) as string[]

  const results = multipliers.map((v) => {
    const numbers = v.match(/\d+/g) as string[]
    return Number(numbers[0]) * Number(numbers[1])
  })

  const sum = results.reduce((accumulator, current) => accumulator + current, 0)
  return sum
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  const reDontDo = /don't\(\)((.|\n)*?do\(\)|.*)/g
  const onlyEnabledInstructions = input.replaceAll(reDontDo, "")

  return part1(onlyEnabledInstructions)
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
        input: `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`,
        expected: 48,
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
