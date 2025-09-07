import { TreeNode, invertTree } from '../code/226.invert-binary-tree';

const root = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7, new TreeNode(6), new TreeNode(9)));
const inverted = invertTree(root);
console.log(inverted?.val);