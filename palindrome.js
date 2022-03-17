// Write a function that takes a string and checks if it is a palindrome.
function palindrome(str) {
  let revStr = str.split('').reverse().join('')
  console.log(revStr)
  return revStr.toLowerCase() === str.toLowerCase()
}

console.log(palindrome("Ian"))
console.log(palindrome("Noon"))
