/*
 * @lc app=leetcode id=541 lang=typescript
 *
 * [541] Reverse String II
 */

// @lc code=start
function reverseStr(s: string, k: number): string {
  let result = '';
  for (let i = 0; i < s.length; i += 2 * k) {
    result += s.slice(i, i + k).split('').reverse().join('');
    console.log("1:", result);
    result += s.slice(i + k, i + 2 * k);
    console.log("2:", result);

  }
  return result;
};
// @lc code=end

