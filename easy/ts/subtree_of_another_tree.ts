class TreeNode_ {
  val: number
  left: TreeNode_ | null
  right: TreeNode_ | null
  constructor(val?: number, left?: TreeNode_ | null, right?: TreeNode_ | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function isSubtree(root: TreeNode_ | null, subRoot: TreeNode_ | null): boolean {
  if (!root) return false
  if (dfs(root, subRoot)) return true

  function dfs(node1: TreeNode_ | null, node2: TreeNode_ | null) {
    if (!node1 && !node2) return true
    if (!node1 || !node2 || node1.val !== node2.val) return false

    return dfs(node1.left, node2.left) && dfs(node1.right, node2.right)
  }

  return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
};