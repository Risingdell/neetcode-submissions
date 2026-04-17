class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        s=s.split("");
        let set=new Set();
        let left=0;
        let max=0;
        let len=0;
        for(let right=0;right<s.length;right++){
            while(set.has(s[right])){
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]);
            len=s.length;
            max=Math.max(max,right-left+1);
        }
        return max;
        
    }
}
