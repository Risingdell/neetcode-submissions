class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        //the logest maintainer
        let set=new Set(nums);
        let maxlength=0

        // a set to get element and check the elelment has or not
        for(let ele of set){

            if(!set.has(ele-1)){
                let curr=ele;
                let length=1;
                while(set.has(curr+1)){
                    curr++;
                    length++
                }
                maxlength=Math.max(maxlength,length)
            }
        }
        return maxlength
        
    }
}
