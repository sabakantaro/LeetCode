# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def move_zeroes(nums)
  left = 0
  right = 1
  while right < nums.length
    next right += 1 if nums[left].zero? && nums[right].zero?

    if nums[left].zero?
      temp = nums[left]
      nums[left] = nums[right]
      nums[right] = temp
    end

    right += 1
    left += 1
  end

  nums
end
