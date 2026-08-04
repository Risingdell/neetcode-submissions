class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let map =new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])||0)+1)
        }

        for(let [key,val] of map){
            if(val>1){
                return true
            }
        }
        return false
    }
}
