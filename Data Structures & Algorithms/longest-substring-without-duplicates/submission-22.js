class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let map=new Map();
        let count=0;
        let left=0;
        for(let right=0;right<s.length;right++){
            let ele=s[right];
            if(map.has(ele)&& map.get(ele)>=left){
                left=map.get(ele)+1;
            }

            map.set(ele,right)
            count=Math.max(count,right-left+1)
        }
        return count;
    }
}
