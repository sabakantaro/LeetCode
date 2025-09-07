/*
 * @lc app=leetcode id=530 lang=typescript
 *
 * [530] Minimum Absolute Difference in BST
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function getMinimumDifference(root: TreeNode | null): number {
    let minDiff = Infinity;
    let visited: number[] = [];
    function dfs(node: TreeNode | null) {
        if (!node) return;
        dfs(node.left);
        visited.push(node.val);
        dfs(node.right);
    }
    dfs(root);
    for (let i = 1; i < visited.length; i++) {
        minDiff = Math.min(minDiff, visited[i] - visited[i - 1]);
    }
    console.log(visited);
    return minDiff;
};
// @lc code=end

