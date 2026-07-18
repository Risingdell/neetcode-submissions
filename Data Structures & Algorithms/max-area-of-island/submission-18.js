class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows=grid.length;
        let cols=grid[0].length;
        let maxArea=0;

        //dfs method
        function dfs(row,col){
            if(row<0 || row >=rows ||col<0 ||col>=cols){
                return 0;
            }
            if(grid[row][col]===0){
                return 0;
            }
            grid[row][col]=0;
            let len=0;
            len++;

            len+=dfs(row+1,col);
            len+=dfs(row-1,col);
            len+=dfs(row,col-1);
            len+=dfs(row,col+1);

            return len;

        }

        for(let row=0;row<rows;row++){
            for(let col=0;col<cols;col++){
                if(grid[row][col]==1){
                    let area=dfs(row,col);
                    if(area>maxArea){
                        maxArea=area;
                    }
                    
                }
            }
        }

        return maxArea;
    }
}
