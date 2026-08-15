class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let left = 0;
        let maxFreq = 0;
        let maxLength = 0;
        let map = new Map();
        for (let right = 0; right < s.length; right++) {
            let ele = s[right];
            map.set(ele, (map.get(ele) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(ele));
            while ((right - left + 1) - maxFreq > k) {
                let leftEle = s[left];
                map.set(leftEle, map.get(leftEle) - 1);
                left++;
            }
            maxLength = Math.max(
                maxLength,
                right - left + 1
            );
        }
        return maxLength;
    }
}