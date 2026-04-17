class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result=[];
        let i=0;
        while(i<nums.length){
            let mul=1;
           
            for(let j=0;j<nums.length;j++){
                if(j===i){
                    continue;

                }
                mul*=nums[j];
            }
            result.push(mul);
            i++;
        }
        return result;
    }
    
}
