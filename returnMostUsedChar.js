function maxChar(str) { //define function
  let freqCounter = {}
  let lowerStr = str.toLowerCase() //setting all chars in a given input to lowercase so they all match & are represented accurately

  for (let char of lowerStr) { //iterating through a for loop the length of the string
    freqCounter[char] = freqCounter[char] + 1 || 1 //set freqCounter equal to 1 or add one if there is a value already present
  }

  let maxCount = 0 //initialize vars
  let maxChar = null;

  for(let key in freqCounter) { //now we are keeping track of which char is used most by setting the maxCount equal to whatever # the most used character is and setting the most used character equal to that key and then returning it
    if(freqCounter[key] > maxCount) {
      maxCount = freqCounter[key]
      maxChar = key
    }
  }

  return maxChar

}

console.log(maxChar('Danny'));
