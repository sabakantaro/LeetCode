from ast import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash = {}
        for idx, num in enumerate(nums):
            if num in hash:
                return [hash[num], idx]
            else:
                hash[target - num] = idx