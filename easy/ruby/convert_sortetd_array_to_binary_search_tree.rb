# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {Integer[]} nums
# @return {TreeNode}
def sorted_array_to_bst(nums)
  helper = lambda do |left, right|
    return nil if left > right

    mid = ((left + right) / 2).floor
    root = TreeNode.new(nums[mid])

    root.left = helper.call(left, mid - 1)
    root.right = helper.call(mid + 1, right)

    root
  end

  helper.call(0, nums.length - 1)
end
