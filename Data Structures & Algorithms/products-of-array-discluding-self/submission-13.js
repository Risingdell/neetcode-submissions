class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        // an result array
        let arr=new Array();

        //a resursion to return the product 
        function product(n){
            let sum=1;
            for(let i=0;i<nums.length;i++){
                if(i===n){
                    continue;
                }
                sum*=nums[i];

            }
            return sum;


        }

        //forloop to iterate
        for(let i=0;i<nums.length;i++){
            let res=product(i);
            arr.push(res);
        }
        return arr;
    }
}
