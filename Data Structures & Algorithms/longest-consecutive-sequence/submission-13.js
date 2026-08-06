class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        // 1. Convert array to a Set for O(1) lookups
        const numSet = new Set(nums);
        let max = 0;

        for (let num of numSet) {
            // 2. Only start counting if 'num' is the start of a sequence
            if (!numSet.has(num - 1)) {
                let curr = num;
                let count = 1;

                // 3. Count the length of the sequence
                while (numSet.has(curr + 1)) {
                    curr++;
                    count++;
                }

                max = Math.max(max, count);
            }
        }

        return max;
    }
}
