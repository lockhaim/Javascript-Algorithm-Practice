// Given a number as an input, print out every interger from 1 to that number. When the number is divisible by 2 print out "Fizz", When its divisible by 3 print out "Buzz", when dividisble by 2 and 3 print out "FizzBuzz".

function fizzBuzz(num) {
    for( let i = 1; i <=num; i++) { //for loop to iterate through i
      if(i % 2 === 0 && i % 3 === 0) console.log("FizzBuzz"); //if statement to check each number- if divisible by 2 AND 3 it will print fizzBuzz
      else if(i % 3 === 0) console.log("Buzz"); //if div by 3 print Bizz
      else if(i % 2 === 0) console.log("Fizz"); //if div by 2 print Fizz
      else if(true) console.log(i); //otherwise print the number
      }
}

fizzBuzz(99) //actually caLL the function with a number 
