/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        // Base case: both nodes are null, so they are identical
        if (p === null && q === null) {
            return true;
        }
        
        // One of the nodes is null, or their values do not match
        if (p === null || q === null || p.val !== q.val) {
            return false;
        }
        
        // Recursively check the left subtrees and right subtrees
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}
