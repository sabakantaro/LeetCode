/*
 * @lc app=leetcode id=561 lang=typescript
 *
 * [561] Array Partition
 */

// @lc code=start
function arrayPairSum(nums: number[]): number {
  // return nums.sort((a, b) => a - b).reduce((acc, cur, i) => i % 2 === 0 ? acc + cur : acc, 0);
  let sorted = nums.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < sorted.length; i += 2) {
    sum += sorted[i];
  }
  return sum;
};
// @lc code=end

