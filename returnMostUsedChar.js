function maxChar(str) {
  let freqCounter = {}
  let lowerStr = str.toLowerCase()

  for (let char of lowerStr) {
    freqCounter[char] = freqCounter[char] + 1 || 1
  }

  let maxCount = 0
  let maxChar = null;

  for(let key in freqCounter) {
    if(freqCounter[key] > maxCount) {
      maxCount = freqCounter[key]
      maxChar = key
    }
  }

  return maxChar

}

console.log(maxChar('Danny'));
