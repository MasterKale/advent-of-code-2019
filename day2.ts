/**
 * https://adventofcode.com/2019/day/2
 */
// Given by prompt
const input: number[] = '1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,10,19,1,19,5,23,2,23,9,27,1,5,27,31,1,9,31,35,1,35,10,39,2,13,39,43,1,43,9,47,1,47,9,51,1,6,51,55,1,13,55,59,1,59,13,63,1,13,63,67,1,6,67,71,1,71,13,75,2,10,75,79,1,13,79,83,1,83,10,87,2,9,87,91,1,6,91,95,1,9,95,99,2,99,10,103,1,103,5,107,2,6,107,111,1,111,6,115,1,9,115,119,1,9,119,123,2,10,123,127,1,127,5,131,2,6,131,135,1,135,5,139,1,9,139,143,2,143,13,147,1,9,147,151,1,151,2,155,1,9,155,0,99,2,0,14,0'.split(',').map((num) => parseInt(num, 10));

/**
 * Following values are between [0-99] (inclusive)
 */
// "noun"
input[1] = 12;
// "verb"
input[2] = 2;

function runIntcode(initialMemory: number[]): number {
  const memory = [...initialMemory];
  let pointer = 0;

  while (pointer < memory.length - 4) {
    let [instruction, param1, param2, param3] = memory.slice(pointer, pointer + 4);

    const num1 = memory[param1];
    const num2 = memory[param2];

    if (instruction === 1) {
      memory[param3] = num1 + num2;
    } else if (instruction === 2) {
      memory[param3] = num1 * num2;
    } else if (instruction === 99) {
      break;
    }

    // Advance to the next group of numbers
    pointer += 4;
  }

  return memory[0];
}

// Part 1 - correct answer: `3101878`
console.log(runIntcode(input));

// Part 2 - correct answer: `8444`
for (let noun = 0; noun <= 99; noun +=1) {
  input[1] = noun;
  for (let verb = 0; verb <= 99; verb += 1) {
    input[2] = verb;

    const output = runIntcode(input);

    if (output === 19690720) {
      console.log(`${noun}${verb}`);
      break;
    }
  }
}
