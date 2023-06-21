/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false


Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.


Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

// Time Complexity: O(n)
// Space Complexity: O(n)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  let obj = {};
  let count = 0;
  for (let c of s) {
    if (!obj[c]) {
      obj[c] = 1;
    } else {
      obj[c] += 1;
    }
    count += 1;
  }

  for (let c of t) {
    if (!obj[c]) {
      return false;
    } else {
      obj[c] -= 1;
      count -= 1;
    }
  }
  console.log(obj, count);
  return count === 0;
};
