interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

const createTreeNode = (val?: number, left?: TreeNode | null, right?: TreeNode | null): TreeNode => {
  return {
    val: val === undefined ? 0 : val,
    left: left || null,
    right: right || null,
  };
}

const maxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;

  const left: number = maxDepth(root.left);
  const right: number = maxDepth(root.right);

  return Math.max(left, right) + 1;
}

const rootNode = createTreeNode(3);
const leftNode = createTreeNode(9);
const rightNode = createTreeNode(20);
const rightLeftNode = createTreeNode(15);
const rightRightNode = createTreeNode(7);

rootNode.left = leftNode;
rootNode.right = rightNode;
rightNode.left = rightLeftNode;
rightNode.right = rightRightNode;

const result = maxDepth(rootNode);
console.log(result); // Output: 3
