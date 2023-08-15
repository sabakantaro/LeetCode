class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  function dfs(left: number, right: number): TreeNode | null {
    if (left > right) return null

    let mid = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[mid]);

    root.left = dfs(left, mid - 1);
    root.right = dfs(mid + 1, right);

    return root
  }

  return dfs(0, nums.length - 1)
};