/*
Given a binary tree, determine if it is height-balanced.


Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
Example 2:


Input: root = [1,2,2,3,3,null,null,4,4]
Output: false
Example 3:

Input: root = []
Output: true
*/

var isBalanced = function (root) {
  let result = true;

  function validate(root) {
    if (!root) return 0;

    const left = validate(root.left);
    const right = validate(root.right);

    if (Math.abs(left - right) > 1) result = false;

    return Math.max(left, right) + 1;
  }

  validate(root);
  return result;
};
