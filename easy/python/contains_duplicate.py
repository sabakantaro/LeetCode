from ast import Dict, List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        numCount: Dict[int, int] = {}
        for num in nums:
            if num in numCount:
                return True
            else:
                numCount[num] = 1

        return False
