class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {

        let rows=board.length;
        let cols=board[0].length;
        function dfs(row,col){
            if(row<0||row>=rows||col<0 ||col>=cols){
                return 0;
            }

            if(board[row][col]!="O"){
                return 0;
            }
            

            board[row][col]="T";
            dfs(row-1,col);
            dfs(row+1,col);
            dfs(row,col-1);
            dfs(row,col+1);
        }

        let r1=0;
        for(let c1=0;c1<cols;c1++){
            if(board[r1][c1]=="O"){
                dfs(r1,c1);
            }

        }

        let r2=rows-1;
        for(let c2=0; c2<cols;c2++ ){
            if(board[r2][c2]=="O"){
                dfs(r2,c2);

            }
        }

        let c1=0;
        for(let r1=0;r1<rows;r1++){
            if(board[r1][c1]=="O"){
                dfs(r1,c1);
            }
        }

        let c2=cols-1;
        for(let r1=0;r1<rows-1;r1++){
            if(board[r1][c2]=="O"){
                dfs(r1,c2);
            }
        }

        for(let i=1;i<rows-1;i++){
            for(let j=1;j<cols-1;j++){
                if(board[i][j]=="O"){
                    board[i][j]="X"
                }
            }


        }

        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(board[i][j]=="T"){
                    board[i][j]="O"
                }
            }


        }

        return board;



    }
}
