/*
Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).



Example 1:


Input: root = [1,2,2,3,4,4,3]
Output: true
Example 2:


Input: root = [1,2,2,null,3,null,3]
Output: false


Constraints:

The number of nodes in the tree is in the range [1, 1000].
-100 <= Node.val <= 100


Follow up: Could you solve it both recursively and iteratively?
*/

// recursive

var isSymmetric = function (root) {
  let result = true;

  function dfs(root1, root2) {
    if (root1 && root2) {
      if (root1.val !== root2.val) result = false;
      dfs(root1.left, root2.right);
      dfs(root1.right, root2.left);
    } else if ((!root1 && root2) || (root1 && !root2)) {
      result = false;
    }
  }

  dfs(root.left, root.right);
  return result;
};

// iterative

var isSymmetric_ = function(root) {
  let result = true;
  let que = [root.left, root.right];

  while (que.length > 0) {
      let left = que.shift();
      let right = que.shift();

      if (!left && !right) continue;
      if ((!left && right || left && !right) || left.val !== right.val) {
          result = false;
      }

      que.push(left.left, right.right);
      que.push(left.right, right.left);
  }
  return result;
};