/*
 * @lc app=leetcode id=521 lang=typescript
 *
 * [521] Longest Uncommon Subsequence I
 */

// @lc code=start
function findLUSlength(a: string, b: string): number {
    return a === b ? -1 : Math.max(a.length, b.length);
};
// @lc code=end

