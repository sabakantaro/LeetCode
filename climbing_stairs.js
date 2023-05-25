/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
*/

// I use recursion with memoization to solve this problem
// Time complexity: O(n)
// Space complexity: O(n)

const climbStairs = function(n, memo = {}) {
  if (n <= 3) return n;
  if (memo[n]) return memo[n];

  memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  return memo[n];
};

console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(4)); // 5
console.log(climbStairs(5)); // 8
console.log(climbStairs(6)); // 13
console.log(climbStairs(7)); // 21
console.log(climbStairs(8)); // 34
console.log(climbStairs(9)); // 55
console.log(climbStairs(10)); // 89