class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map=new Map();
        for(let i=0;i<numbers.length;i++){
            map.set(numbers[i],i)
        }
        for(let i=0;i<=numbers.length;i++){
            let needed=target-numbers[i];
            if(map.get(needed)!==undefined && map.get(needed)!==i){
                return [map.get(numbers[i])+1,map.get(needed)+1];
            }
        }
    }
}
