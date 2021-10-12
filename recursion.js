/** TEST: counter */
const counter = (num) => {
  // base case to stop the recursion 
  if(num === 0) return; 
  // normal case 
  return counter(num - 1) 
}

console.log(counter(5))

/** TEST: oddOrEven */
const oddOrEven = (num) => {
  // base case: stop the recursion 
  if(num === 0) return 'Even' 
  if(num === 1) return 'Odd'
  // normal case 
  return oddOrEven(num - 2) 
}

/** product: calculate the product of an array of numbers. */

const product = (nums, idx=0) => {
  // base case: if index is 0 it just returns 1 automatically 
  if(idx === nums.length) return 1   
  
  // normal case 
  return nums[idx] * product(nums, idx+1) 
}

/** longest: return the length of the longest word in an array of words. */

const longest = (words, idx=0, longestWord=0) => {
  // base case 
  if(idx === words.length) return longestWord

  // normal case 
  longestWord = Math.max(words[idx].length, longestWord) 
  return longest(words, idx + 1, longestWord) 

}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  // base case 
  if(str.length < 1) return ''; 

  // normal case: need to return a string with first letter and then every other one
  // hello => h, l, o
  return str[0] + everyOther(str.slice(2)) 

}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // base case: if length is 1 it is palindrome
  if(str.length <= 1) return true; 

  if(str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1))
  }
  return false

}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx=0) {
  // base case:
  if(idx === arr.length) return - 1
  if(arr[idx] === val) return idx 

  return findIndex(arr, val, idx + 1) 

}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // base case: empty string returns empty
  if(str.length === 0) return ""; 

  // recursive case: 
  return revString(str.slice(1)) + str[0]
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, idx=0) {
  if(idx === arr.length) return - 1
  if(arr[idx] === val) return idx 
  return binarySearch(arr, val, idx + 1) 
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
