class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional


class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        def helper(left: Optional[TreeNode], right: Optional[TreeNode]) -> bool:
            if not left and not right:
                return True
            elif not left and right or left and not right:
                return False
            elif left and right and left.val != right.val:
                return False

            return helper(left.left, right.right) and helper(left.right, right.left)

        return helper(root.left, root.right)
