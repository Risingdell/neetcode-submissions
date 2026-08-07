class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let topk=new Array();
    //store all variable in map with frequency
    let map=new Map();
    for(let i=0;i<nums.length;i++){
        map.set(nums[i],(map.get(nums[i])||0)+1)
    }
    //sort the varible as entries and sort based on the value
    nums=[...map.entries()].sort((a,b)=>b[1]-a[1])
    //slic the first two
    for(let i=0;i<k;i++){
        let ele=nums[i]
        topk.push(ele[0])
    }
    //return the array
    return topk;
    }
}
