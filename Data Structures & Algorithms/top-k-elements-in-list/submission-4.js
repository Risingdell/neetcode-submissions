class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let result=[];
        let arr=new Array();
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])||0)+1);
        }
        result=Array.from(map.entries());
        result.sort((a,b)=>b[1]-a[1]);
        for(let i=0;i<k;i++){
            let ele=result[i];
            arr.push(ele[0])
        }
        return arr;  
    }
}
