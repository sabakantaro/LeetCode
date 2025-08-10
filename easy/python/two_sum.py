"""Two Sum problem solution.

This module contains a simple hash-map based solution to the classic
Two Sum problem. The original implementation imported ``List`` from the
``ast`` module which is incorrect; the type resides in ``typing``.
"""

from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        lookup = {}
        for idx, num in enumerate(nums):
            if num in lookup:
                return [lookup[num], idx]
            lookup[target - num] = idx

        return []
