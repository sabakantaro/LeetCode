# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Boolean}
def is_balanced(root)
  helper = lambda do |node|
    return 0 unless node

    left = helper.call(node.left)
    right = helper.call(node.right)

    return -1 if left == -1 || right == -1 || (left - right).abs > 1

    [left, right].max + 1
  end

  helper.call(root) != -1
end
