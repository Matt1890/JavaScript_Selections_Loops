console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

for (let num = 0; num <= 100; num ++) {
  if (num % 2 == 0) {
  continue;
  } else { 
    console.log(`${num} is odd`);
    }
  };

  console.log("EXERCISE 2:\n==========\n");

  for (let num = 0; num <= 100; num ++) {
    if (num % 3 == 0 && num % 5 == 0) {
      console.log(`${num} Fizz Buzz`);
    } else if (num % 5  == 0) {
      console.log(`${num} Buzz`);
    } else if (num % 3 == 0) {
      console.log(`${num} Fizz`);
    } else {
      continue;
    }
    };

    console.log("EXERCISE 3:\n==========\n");
  
    let whileNum = 0;
      while (whileNum <= 100 && whileNum % 2 > 0) 
    {
      whileNum ++; console.log(`${whileNum} is odd`); 
      };

    let doNum = 0;
      do {
        doNum ++; console.log(`${doNum} is odd`); 
        } while (doNum <= 100);

    
        let fbwNum = 0;
        while (fbwNum <= 100) {
          fbwNum ++;
          if (fbwNum % 3 == 0 && fbwNum % 5 == 0) {
            console.log(`${fbwNum} Fizz Buzz`);
          } else if (fbwNum % 5  == 0) {
            console.log(`${fbwNum} Buzz`);
          } else if (fbwNum % 3 == 0) {
            console.log(`${fbwNum} Fizz`);
          } else {
            continue;
          }
          };

          let fbwDoNum = 0;
         do {
          fbwDoNum ++;
          if (fbwDoNum % 3 == 0 && fbwDoNum % 5 == 0) {
            console.log(`${fbwDoNum} Fizz Buzz`);
          } else if (fbwDoNum % 5  == 0) {
            console.log(`${fbwDoNum} Buzz`);
          } else if (fbwDoNum % 3 == 0) {
            console.log(`${fbwDoNum} Fizz`);
          } else {
            continue;
          }
          } while (fbwDoNum <= 100);




 


  //  for (let bottlesOnTheWall = 99; bottlesOnTheWall >= 0; bottlesOnTheWall--) {
  //      if (bottlesOnTheWall) {
  //        console.log(`${bottlesOnTheWall} bottles of milk on the wall...`);
  //      } else {
  //        console.log(`No more bottles of milk on the wall!`);
  //      }
  //    }

// Exercise 2 Section

