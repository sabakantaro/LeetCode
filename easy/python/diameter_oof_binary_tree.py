class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional


class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        _max = 0

        def helper(node):
            nonlocal _max
            if not node:
                return 0

            left = helper(node.left)
            right = helper(node.right)

            _sum = left + right
            _max = max(_sum, _max)

            return max(left, right) + 1

        helper(root)
        return _max
