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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let curr = root;
        
        while (curr !== null) {
            // If both nodes are in the left subtree
            if (p.val < curr.val && q.val < curr.val) {
                curr = curr.left;
            } 
            // If both nodes are in the right subtree
            else if (p.val > curr.val && q.val > curr.val) {
                curr = curr.right;
            } 
            // We found the split point, which is the LCA
            else {
                return curr;
            }
        }
        
        return null;
    }
}
