
function product(numbers, position = 0) {
  if (position === numbers.length) return 1;
  return numbers[position] * product(numbers, position + 1);
}

function longest(wordsArray, position = 0, maxLength = 0) {
  if (position === wordsArray.length) return maxLength;
  maxLength = Math.max(wordsArray[position].length, maxLength);
  return longest(wordsArray, position + 1, maxLength);
}

function everyOther(string, position = 0, resultString = "") {
  if (position >= string.length) return resultString;
  resultString += string[position];
  return everyOther(string, position + 2, resultString);
}

function isPalindrome(string, position = 0) {
  let left = position;
  let right = string.length - position - 1;
  if (left >= right) return true;
  if (string[left] !== string[right]) return false;
  return isPalindrome(string, position + 1);
}

function findIndex(array, value, position = 0) {
  if (position === array.length) return -1;
  if (array[position] === value) return position;
  return findIndex(array, value, position + 1);
}

function revString(string, position = 0, reversed = "") {
  if (reversed.length === string.length) return reversed;
  reversed += string[string.length - 1 - position];
  return revString(string, position + 1, reversed);
}

function gatherStrings(obj) {
  let strings = [];
  for (let prop in obj) {
    if (typeof obj[prop] === "string") strings.push(obj[prop]);
    if (typeof obj[prop] === "object") strings.push(...gatherStrings(obj[prop]));
  }
  return strings;
}

function binarySearch(sortedArray, value, start = 0, end = sortedArray.length - 1) {
  if (start > end) {
    return -1;
  }
  let middleIndex = Math.floor((start + end) / 2);
  if (sortedArray[middleIndex] === value) {
    return middleIndex;
  }
  if (sortedArray[middleIndex] > value) {
    return binarySearch(sortedArray, value, start, middleIndex - 1);
  }
  return binarySearch(sortedArray, value, middleIndex + 1, end);
}


module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
