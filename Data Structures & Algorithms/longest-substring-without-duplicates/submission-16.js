class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set =new Set();
        let left=0;
        let maxlength=0;

        for(let right=0;right<s.length;right++){
            let ele=s[right];

            while(set.has(ele)){
                set.delete(s[left])
                left++;
            }
            set.add(s[right])

            maxlength=Math.max(maxlength,right-left+1);

        }
        return maxlength;
    }
}
