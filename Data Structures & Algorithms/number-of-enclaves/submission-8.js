class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    numEnclaves(grid) {

        let rows= grid.length;
        let cols=grid[0].length;

        //dfs function for  boundary mainatainace 

        function dfs(row,col){
            if(row<0 ||row>=rows ||col <0 ||col>=cols || grid[row][col]==0){
                return 0
            }
            

            grid[row][col]=0
            dfs(row-1,col);
            dfs(row+1,col);
            dfs(row,col+1);
            dfs(row,col-1);
        }
        //for left edge
        for(let row=0;row<rows;row++){
            if(grid[row][0]==1){
                dfs(row,0)
            }
        }
        //for right edge
        for(let row=0;row<rows;row++){
            if(grid[row][cols-1]==1){
                dfs(row,cols-1)
            }
        }

        //for top edge
        for(let col=0;col<cols;col++){
            if(grid[0][col]==1){
                dfs(0,col)
            }
        }

        //for bottom edge
        for(let col=0;col<cols;col++){
            if(grid[rows-1][col]==1){
                dfs(rows-1,col)
            }
        }
        let Encl=0;
        for(let i=1;i<rows-1;i++){
            for(let j=1;j<cols-1;j++){
                if(grid[i][j]==1){
                    Encl+=1;
                }

            }
        }
        return Encl;



    }


}

