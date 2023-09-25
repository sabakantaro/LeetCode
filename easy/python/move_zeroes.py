from ast import List


class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        left, right = 0, 1
        while right < len(nums):
            if nums[left] == 0 and nums[right] == 0:
                right += 1
            elif nums[left] == 0:
                temp = nums[left]
                nums[left] = nums[right]
                nums[right] = temp
            else:
                left += 1
                right += 1

        return nums
