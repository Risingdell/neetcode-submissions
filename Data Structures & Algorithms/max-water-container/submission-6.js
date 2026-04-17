class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max=-Infinity;
        let area=0;
        let left=0;
        let right=heights.length-1;
        while(left<right){
            let height=Math.min(heights[left],heights[right]);
            let breadth=right-left;
            area=height*breadth;
            max=Math.max(max,area);
            if(heights[left]<heights[right]){
                left++;
            }else{
                right--;
            }
        }
        return max;
    }
}
