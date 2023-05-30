// Need to review this one. I don't understand it.

/*
  Given the root of a binary tree, invert the tree, and return its root.
*/

var invertTree = function(root) {
  if(root == null) return root

  invertTree(root.left)
  invertTree(root.right)

  const curr = root.left
  root.left = root.right
  root.right = curr
  console.log(root)
  return root
};