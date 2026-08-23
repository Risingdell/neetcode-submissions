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
     * @return {number[][]}
     */
    levelOrder(root) {
        // Return an empty array if the tree has no nodes
        if (!root) {
            return [];
        }

        const result = [];
        const queue = [root]; // Initialize the queue with the root node

        while (queue.length > 0) {
            const levelSize = queue.length; // Number of nodes at the current level
            const currentLevel = [];

            for (let i = 0; i < levelSize; i++) {
                const currentNode = queue.shift(); // Remove the front node from the queue
                currentLevel.push(currentNode.val); // Add its value to the current level array

                // Enqueue the left child if it exists
                if (currentNode.left) {
                    queue.push(currentNode.left);
                }
                // Enqueue the right child if it exists
                if (currentNode.right) {
                    queue.push(currentNode.right);
                }
            }

            // Append the completed level to the final result
            result.push(currentLevel);
        }

        return result;
    }
}
