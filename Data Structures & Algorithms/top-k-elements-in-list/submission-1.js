class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

      let map=new Map();
      let max

      for(let n of nums){
        map.set(n,(map.get(n)||0)+1)
      }

      let sorted=[...map.entries()].sort((a,b)=>b[1]-a[1]);
      return sorted.slice(0,k).map(entry=>entry[0]);

    }
}
