/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

var isValid = function (s) {
  if (s.length === 1) return false;
  let stack = [];
  for (let c of s) {
    if (c === '(') {
      stack.push(')');
    } else if (c === '[') {
      stack.push(']');
    } else if (c === '{') {
      stack.push('}');
    } else if (stack.pop() !== c) {
      return false;
    }
  }
  return !stack.length;
};

// var isValid = function (s) {
//   let arr = [];
//   for (let bracket of s) {
//     if (bracket === '{') arr.push('}');
//     else if (bracket === '(') arr.push(')');
//     else if (bracket === '[') arr.push(']');
//     else if (bracket !== arr.pop()) return false;
//   }
//   return arr.length > 0 ? false : true;
// };
