/*
Given an integer array nums where the elements are sorted in ascending order, convert it to a 
height-balanced
binary search tree.



Example 1:


Input: nums = [-10,-3,0,5,9]
Output: [0,-3,9,-10,null,5]
Explanation: [0,-10,5,null,-3,null,9] is also accepted:

Example 2:


Input: nums = [1,3]
Output: [3,1]
Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.


Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in a strictly increasing order.
*/

// var sortedArrayToBST = function (nums) {
//   if (!nums.length) return null;

//   let mid = Math.floor(nums.length / 2);
//   let node = new TreeNode(nums[mid]);

//   node.left = sortedArrayToBST(nums.slice(0, mid));
//   node.right = sortedArrayToBST(nums.slice(mid + 1));

//   return node;
// };

var sortedArrayToBST = function (nums) {
  function recursive(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);
    const root = new TreeNode(nums[mid]);

    root.left = recursive(left, mid - 1);
    root.right = recursive(mid + 1, right);

    return root;
  }

  return recursive(0, nums.length - 1);
};
