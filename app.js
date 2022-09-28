console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let num = 0; num <= 100; num++) {
  if (num % 2 == 0) {
    continue;
  } else {
    console.log(`${num} is odd`);
  }
}

console.log("EXERCISE 2:\n==========\n");

for (let num = 0; num <= 100; num++) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(`${num} Fizz Buzz`);
  } else if (num % 5 == 0) {
    console.log(`${num} Buzz`);
  } else if (num % 3 == 0) {
   console.log(`${num} Fizz`);
  }
}

console.log("EXERCISE 3:\n==========\n");

let whileNum = 0;
while (whileNum <= 100 && whileNum % 2 > 0) {
  whileNum++;
  console.log(`${whileNum} is odd`);
}

let doNum = 0;
do {
  doNum++;
  console.log(`${doNum} is odd`);
} while (doNum <= 100);

let fbwNum = 0;
while (fbwNum <= 100) {
  fbwNum++;
  if (fbwNum % 3 == 0 && fbwNum % 5 == 0) {
    console.log(`${fbwNum} Fizz Buzz`);
  } else if (fbwNum % 5 == 0) {
    console.log(`${fbwNum} Buzz`);
  } else if (fbwNum % 3 == 0) {
    console.log(`${fbwNum} Fizz`);
  } else {
    continue;
  }
}

let fbwDoNum = 0;
do {
  fbwDoNum++;
  if (fbwDoNum % 3 == 0 && fbwDoNum % 5 == 0) {
    console.log(`${fbwDoNum} Fizz Buzz`);
  } else if (fbwDoNum % 5 == 0) {
    console.log(`${fbwDoNum} Buzz`);
  } else if (fbwDoNum % 3 == 0) {
    console.log(`${fbwDoNum} Fizz`);
  } else {
    continue;
  }
} while (fbwDoNum <= 100);

console.log("EXERCISE 4:\n==========\n");

let value = Math.round(Math.random() * 500);
// creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100);
// creates a random number between 100 and 500

for (let checkValue = 0; checkValue <= n; checkValue++) {
  if (checkValue == value) {
    console.log(`Found value! ${checkValue}`);
    break;
  } else if (checkValue == n) {
    console.log("Did not find value.");
  }
}

console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let nN = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);

for (let nNum = start; nNum <= nN; nNum++) {
  if (nNum % fizzDivisor == 0 && nNum % buzzDivisor == 0) {
    console.log(`${nNum} Fizz Buzz`);
  } else if (nNum % buzzDivisor == 0) {
    console.log(`${nNum} Buzz`);
  } else if (nNum % fizzDivisor == 0) {
   console.log(`${nNum} Fizz`);
  }
}
