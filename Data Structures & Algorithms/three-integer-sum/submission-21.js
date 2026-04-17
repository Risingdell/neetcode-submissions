class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let map=[];
        nums.sort((a,b)=>a-b);

        
        for(let i=0;i<nums.length-2;i++){
            if(i>0&&nums[i]===nums[i-1])continue;
            let left=i+1;
            
            let right=nums.length-1;
            while(left<right){
                let result=nums[i]+nums[left]+nums[right];
                if(result>0){
                    right--;
                }else if(result<0){
                    left++;
                }
                else{
                    map.push([nums[i],nums[left],nums[right]]);
                    while(left<right && nums[left]===nums[left+1])left++;
                    while(left<right && nums[right]===nums[right-1])right--;
                    left++;
                    right--;
                }
                
            }
        }

        return map;
    }
}
