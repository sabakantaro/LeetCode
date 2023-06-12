/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".



Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.


Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lowercase English letters.
*/

var longestCommonPrefix = function(strs) {
  let prefix = strs[0]
  let temp = ""
  for (let str of strs) {
      for (let i = 0; i < prefix.length; i++) {
          if (prefix[i] === str[i]) {
              temp += prefix[i]
          } else {
              break
          }
      }
      prefix = temp
      temp = ""
  }
  return prefix
};