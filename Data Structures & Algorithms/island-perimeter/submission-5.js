class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    islandPerimeter(grid) {
        let rows=grid.length;
        let cols=grid[0].length;
        
        function dfs(row,col){
            if(row<0 ||row>=rows || col <0 || col>=cols){
                return 1;
            }
            if (grid[row][col]==-1){
                return 0;
            }
            if(grid[row][col]==0){
                return 1;
            }
            grid[row][col]=-1;
            let peri=0;
            peri+= dfs(row-1,col);
            peri+=dfs(row+1,col);
            peri+= dfs(row,col-1);
            peri+= dfs(row,col+1);

            return peri;

            
            
            
            
        }
        let result=0;
        for(let row=0;row<rows;row++){
            for(let col=0;col<cols;col++){
                if(grid[row][col]==1){
                    result=dfs(row,col)
                }
            }
        }
        return result;
    }
}
