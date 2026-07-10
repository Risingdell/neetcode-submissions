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
     * @return {boolean}
     */
    isValidBST(root) {

        function validate(node,lower,upper){
            if(node===null){
                return true
            }
            if(node.val<=lower|| node.val>=upper){
                return false;
            }

            return validate(node.left,lower,node.val)&&validate(node.right,node.val,upper)

        }
        return validate(root,-Infinity,Infinity)
    }
}
