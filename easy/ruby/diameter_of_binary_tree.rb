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
# @return {Integer}
def diameter_of_binary_tree(root)
  @diameter = 0

  helper = lambda do |node|
    return 0 if node.nil?

    left = helper.call(node.left)
    right = helper.call(node.right)

    @diameter = [@diameter, left + right].max

    [left, right].max + 1
  end

  helper.call(root)
  @diameter
end
