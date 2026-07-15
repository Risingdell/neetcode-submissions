class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let rows=grid.length;
        let cols=grid[0].length;
        let maxLen=0;
        
        function dfs(row,col){

            if(row<0||row>=rows|| col<0 || col>=cols){
                return 0;
            }
            if(grid[row][col]==0){
                return 0;
            }
            grid[row][col]=0;
            let area=1;
            

            area+= dfs(row-1,col);
            area+= dfs(row+1,col);
            area+= dfs(row,col-1);
            area+= dfs(row,col+1);
            return area;
        }


        for(let row=0;row<rows;row++){
            for(let col=0; col<cols; col++ ){
                

                if(grid[row][col]===1){
                    let area=dfs(row,col);
                    if(area >maxLen){
                        maxLen=area
                    }

                }
                
            }
        }
        return maxLen;
    }
}
