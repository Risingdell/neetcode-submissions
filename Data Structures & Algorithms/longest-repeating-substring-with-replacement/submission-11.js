class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
    let left = 0;
    let maxFreq = 0;
    let freq = new Map();
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        freq.set(char, (freq.get(char) || 0) + 1);

        maxFreq = Math.max(maxFreq, freq.get(char));

        while ((right - left + 1) - maxFreq > k) {
            let leftChar = s[left];
            freq.set(leftChar, freq.get(leftChar) - 1);
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}
}
