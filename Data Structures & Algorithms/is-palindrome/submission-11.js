class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleaned=s.toLowerCase().replace(/[^a-z0-9]/g,"");

        let reverse=cleaned.split("").reverse().join("");

        return reverse===cleaned;
    }
}
