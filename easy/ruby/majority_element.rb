# @param {Integer[]} nums
# @return {Integer}
def majority_element(nums)
  major = 0
  count = 0
  nums.each do |num|
    major = num if count.zero?
    if num == major
      count += 1
    else
      count -= 1
    end
  end

  major
end
