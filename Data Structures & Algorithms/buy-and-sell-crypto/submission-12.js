class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let max=0;
        let p=0;
        let min=prices[0]
        for(let i=1;i<prices.length;i++){
            min=Math.min(min,prices[i]);
            p=prices[i]-min;
            max=Math.max(p,max);
        }
        return max;
    }
}
