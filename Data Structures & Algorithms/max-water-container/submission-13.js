class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea=-Infinity;
        let i=0;
        let j=heights.length-1;
        let area=0
        while(i<j){
            let breadth=j-i;
            let length=Math.min(heights[i],heights[j]);
            area=length*breadth;
            
            maxArea=Math.max(maxArea,area);
            if(heights[i]<=heights[j]){
                i++;
            }else{
                j--;
            }
        }
        return maxArea;
    }
}
