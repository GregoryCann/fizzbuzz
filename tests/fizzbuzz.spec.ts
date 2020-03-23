import * as FizzBuzz from '../src/fizzbuzz'

describe('Convert Should', () => {

  it.each([
    [1, "1"],
    [2, "2"],
    [4, "4"],
  ])('Convert Regular Number "%i" To Regular String', (inputNumber, expectedOutput) => {
    
    expect(FizzBuzz.convert(inputNumber)).toBe(expectedOutput);
  });

  it.each([
    [3],
    [6],
    [9]
  ])('Convert Multiple of 3 "%i" to fizz', (inputNumber) => {
    expect(FizzBuzz.convert(inputNumber)).toBe('fizz');
  });

  it.each([
    [5],
    [10],
    [20]
  ])('Convert Multiple of 5 "%i" to buzz', (inputNumber) => {
    expect(FizzBuzz.convert(inputNumber)).toBe('buzz');
  });

  it.each([
    [15],
    [45]
  ])('Convert Multiple of 3 and 5 "%i" to fizzbuzz', (inputNumber) => {
    expect(FizzBuzz.convert(inputNumber)).toBe('fizzbuzz');
  });
})
