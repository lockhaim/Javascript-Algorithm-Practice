// Write a function that takes a string and checks if it is a palindrome.
function palindrome(str) { //function takes a string
  let revStr = str.split('').reverse().join('') //set a variable that takes the string and splits it into an array between each character. It then reverses this array, and joins each element back together.
  console.log(revStr) //consolelog the reversed string so we can see it
  return revStr.toLowerCase() === str.toLowerCase() //will return true if the string is a palindrome regardless of case (setting both variables str and revStr to lowercase. If we did not include this it would give strings with an uppercase a value of false because the numerical value held by the same letter with different casing is different.)
}

console.log(palindrome("Ian")) //testing non palindrome
console.log(palindrome("Noon")) //testing palindrome with uppercase
