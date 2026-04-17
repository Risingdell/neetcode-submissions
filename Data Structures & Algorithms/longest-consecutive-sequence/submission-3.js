class Solution {
    longestConsecutive(nums) {
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];
            let length = 1;

            while (nums.includes(current + 1)) {
                current = current + 1;
                length++;
            }

            longest = Math.max(longest, length);
        }

        return longest;
    }
}