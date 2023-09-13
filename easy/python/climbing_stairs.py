from typing import Dict

class Solution:
    def climbStairs(self, n: int, memo: Dict[int, int] = {}) -> int:
        if n <= 3:
            return n
        if n in memo:
            return memo[n]
        memo[n] = self.climbStairs(n - 1) + self.climbStairs(n - 2)
        return memo[n]
