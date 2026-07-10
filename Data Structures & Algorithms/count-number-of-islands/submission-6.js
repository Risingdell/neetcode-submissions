class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        let rows=grid.length;
        let cols=grid[0].length;

        function dfs(row,col){
            if(row<0||row>=rows||
               col<0|| col>=cols){
                return;

               }
               if(grid[row][col]==="0"){
                return;
               }

               grid[row][col]="0";

               dfs(row-1,col);
               dfs(row+1,col);
               dfs(row,col-1);
               dfs(row,col+1);

        }


        let Island=0;

        for(let row=0;row<rows;row++){
            for(let col=0;col<cols;col++){
                if(grid[row][col]==="1"){
                    Island++;
                    dfs(row,col);

                }

            }
        }
        return Island;
    }
}
