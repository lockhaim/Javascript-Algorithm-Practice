// Given a number as an input, print out every interger from 1 to that number. When the number is divisible by 2 print out "Fizz", When its divisible by 3 print out "Buzz", when dividisble by 2 and 3 print out "FizzBuzz".

function fizzBuzz(num) {
    for( let i = 1; i <=num; i++) {
      if(i % 2 === 0 && i % 3 === 0) console.log("FizzBuzz");
      else if(i % 3 === 0) console.log("Buzz");
      else if(i % 2 === 0) console.log("Fizz");
      else if(true) console.log(i);
      }
}

fizzBuzz(99)
