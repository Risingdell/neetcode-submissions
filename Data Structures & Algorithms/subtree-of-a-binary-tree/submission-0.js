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
     * @param {TreeNode} root
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {

        // Compare whether two trees are exactly the same
        function isSame(tree1, tree2) {

            // Both are null
            if (tree1 === null && tree2 === null) {
                return true;
            }

            // One is null
            if (tree1 === null || tree2 === null) {
                return false;
            }

            // Values are different
            if (tree1.val !== tree2.val) {
                return false;
            }

            // Compare left and right subtrees
            return isSame(tree1.left, tree2.left) &&
                   isSame(tree1.right, tree2.right);
        }

        // Main DFS
        function dfs(node) {

            if (node === null) {
                return false;
            }

            // If current subtree matches
            if (isSame(node, subRoot)) {
                return true;
            }

            // Otherwise search left or right
            return dfs(node.left) || dfs(node.right);
        }

        return dfs(root);
    }
}