class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums=nums.sort((a,b)=>a-b)

        let Arr=new Array();
        for(let i=0;i<nums.length;i++){
            if(i>0 && nums[i]===nums[i-1]){
                continue;
            }
            let left=i+1;
            let right=nums.length-1;
            
            while(left<right){
                let result=nums[i]+nums[left]+nums[right];
                if(result<0){
                    left++;
                }else if(result>0){
                    right--;
                }else{
                    Arr.push([nums[i],nums[left],nums[right]]);
                    left++;
                    right--;
                    while(left<right && nums[left]===nums[left-1])left++;
                    while(left<right && nums[right]===nums[right+1])right--;
                    

                }
            } 
 
        }

        return Arr;
    }
}
