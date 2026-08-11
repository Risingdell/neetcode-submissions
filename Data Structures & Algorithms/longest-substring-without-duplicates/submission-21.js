class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        //initalize a counter to calculate the unique letters
        let count=0;
        //initialize a map
        let map=new Map();
        //set left to 0
        let left=0;
        //produce a for loop  and set right to window  and move it forward and increment 
        for(let right=0;right<s.length;right++){
            let ele=s[right];
            if(map.has(ele) && map.get(ele)>=left){
                left=map.get(ele)+1
            }
            map.set(ele,right);
            count=Math.max(count,right-left+1)
        }
        //when the same element comes move the right side until the elememt not in th e window

        return count;
    }
}
