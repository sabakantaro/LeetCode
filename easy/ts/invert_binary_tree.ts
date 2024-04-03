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

// Recursive
function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null

  const left = invertTree(root.left)
  const right = invertTree(root.right)

  root.right = left
  root.left = right

  return root
};

// Iterative
function invertTree2(root: TreeNode | null): TreeNode | null {
  const queue = [root];
  while (queue.length) {
    const curr = queue.pop();

    if (curr) {
      const left = curr.left;
      curr.left = curr.right;
      curr.right = left;

      if (curr.left) {
        queue.push(curr.left);
      }
      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  return root;
};