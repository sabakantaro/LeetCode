/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

// use a hash to store the counts of each element

// Time Complexity: O(n)
// Space Complexity: O(n)

var majorityElement = function (nums) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]] += 1;
    }
  }
  let value = 0;
  let majority = 0;
  for (let key in hash) {
    if (value < hash[key]) {
      value = hash[key];
      majority = key;
    }
  }
  return majority;
};
