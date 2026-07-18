class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        let rows=board.length;
        let cols=board[0].length;

        //dfs for edge 'O's to "T"
        function dfs(row,col){
            if(row<0 || row >=rows || col<0 || col>=cols){
                return 0;
            }

            if(board[row][col]=="X"){
                return 0;
            }
            if(board[row][col]=="T"){
                return 0;
            }

            board[row][col]="T";

            dfs(row+1,col);
            dfs(row-1,col);
            dfs(row,col+1);
            dfs(row,col-1);
        }

        for(let row=0;row<rows;row++){
            if(board[row][0]=="O"){
                dfs(row,0)
            }
        }
        for(let row=0;row<rows;row++){
            if(board[row][cols-1]=="O"){
                dfs(row,cols-1)
            }
        }

        for(let col=0;col<cols;col++){
            if(board[0][col]=="O"){
                dfs(0,col)
            }
        }

        for(let col=0;col<cols;col++){
            if(board[rows-1][col]=="O"){
                dfs(rows-1,col)
            }
        }

        for(let row=1;row<rows-1;row++){
            for(let col=1;col<cols-1;col++){
                if(board[row][col]=="O"){
                    board[row][col]="X";
                }

            }
        }
        
        for(let row=0;row<rows;row++){
            for(let col=0;col<cols;col++){
                if(board[row][col]=="T"){
                    board[row][col]="O";
                }

            }
        }

        return board;

    }
}
