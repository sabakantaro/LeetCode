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

const isAnagram_ = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const charCount = new Map();

  for (const char of s) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!charCount.has(char) || charCount.get(char) - 1 < 0) return false;
    charCount.set(char, charCount.get(char) - 1);
  }

  return true;
};

function isAnagram_2(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const hash = {}
  for (let i = 0; i < s.length; i++) {
    hash[s[i]] = (hash[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!hash[t[i]] || hash[t[i]] == 0) {
      return false;
    } else {
      hash[t[i]]--
    }
  }

  return true
};