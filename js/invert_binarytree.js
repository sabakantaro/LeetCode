// Need to review this one. I don't understand it.

/*
  Given the root of a binary tree, invert the tree, and return its root.
*/

var invertTree = function(root) {
  if (!root) return null

  const temp = root.left
  root.left = root.right
  root.right = temp

  invertTree(root.left)
  invertTree(root.right)

  return root
};