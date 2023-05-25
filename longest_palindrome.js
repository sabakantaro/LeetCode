/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.
*/

var longestPalindrome = function(s) {
  let counts = {};
  for (let i = 0; i < s.length; i++) {
      if (!counts[s[i]]) {
          counts[s[i]] = 1;
      } else {
          counts[s[i]] += 1;
      }
  }
  let pLength = 0;
  let hasOdd = false;
  for (let char in counts) {
      if (counts[char] % 2 === 0) {
          pLength += counts[char];
      } else {
          pLength += (counts[char] - 1);
          hasOdd = true;
      }
  }
  return hasOdd ? pLength + 1 : pLength
};

