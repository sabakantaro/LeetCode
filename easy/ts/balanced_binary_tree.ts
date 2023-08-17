
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


function isBalanced(root: TreeNode | null): boolean {
  let result = true

  function dfs(root: TreeNode | null): number {
    if (!root) return 0;

    const left = dfs(root.left) as number;
    const right = dfs(root.right) as number;

    if (Math.abs(left - right) > 1) result = false

    return Math.max(left, right) + 1
  }

  dfs(root)
  return result
};