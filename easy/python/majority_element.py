from ast import List


class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        major = 0
        count = 0
        for n in nums:
            if count == 0:
                major = n
            if major == n:
                count += 1
            else:
                count -= 1

        return major
