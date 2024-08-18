
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

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let min = 0;
  if (root.left) {
    min = minDepth(root.left);
  }
  if (root.right) {
    min = min ? Math.min(min, minDepth(root.right)) : minDepth(root.right);
  }

  return min + 1;
};