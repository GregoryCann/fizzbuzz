const Fizz = "fizz";
const Buzz = "buzz";

const FizzFactor = 3;
const BuzzFactor = 5;

const isDivisibleBy = (factor: number, number: number) => 
  number % factor == 0;


const convert = (number: number):string => {
  if (isDivisibleBy(42, number)) 
      return 'Answer to the Ultimate Question of Life, the Universe, and Everything';
  
  if (isDivisibleBy(42, number)) 
  return 'Answer to the Ultimate Question of Life, the Universe, and Everything';

  if (isDivisibleBy(FizzFactor, number) && isDivisibleBy(BuzzFactor,number)) 
      return `${Fizz}${Buzz}`;
  
  if (isDivisibleBy(FizzFactor, number)) 
      return Fizz;
  
  if (isDivisibleBy(BuzzFactor, number)) 
      return Buzz;

  return number.toString();
};

export { convert };
