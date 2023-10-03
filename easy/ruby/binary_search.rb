# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
  left = 0
  right = nums.length - 1
  while left <= right
    mid = ((left + right) / 2).floor

    return mid if nums[mid] == target

    nums[mid] < target ? left = mid + 1 : right = mid - 1
  end

  -1
end
