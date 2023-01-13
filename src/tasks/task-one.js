// Pandigital Fibonacci ends

// https://projecteuler.net/problem=104

let a = 2;
let fibOne = 1;
let fibTwo = 1;

let cutNumber = 1000_0000_000;
let phi = Math.log10((1 + Math.sqrt(5)) / 2);
let roots = Math.log10(5) / 2;

const particular = (arr) => {
  return arr.reduce((acc, item) => {
    if (acc.indexOf(item) < 0) {
      acc.push(item);
    }
    return acc;
  }, []);
};

const isPandigital = (n) => {
  const numeral = particular(n.toString().split(""));

  return numeral.length == n.toString().length ? true : false;
};

const callFibonacci = () => {
  while (true) {
    a++;
    sum = fibOne + fibTwo;
    fibOne = fibTwo % cutNumber;
    fibTwo = sum % cutNumber;
    if (!isPandigital(fibTwo)) {
      continue;
    }
    const showFibk = a * phi - roots;
    const fibk = Math.floor(
      Math.pow(10, showFibk - Math.floor(showFibk)) * Math.pow(10, 8)
    );
    if (isPandigital(fibk)) {
      break;
    }
  }
};

callFibonacci();

console.log(a);
