class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        
        let arr=s.split("");
        if(arr.length%2===1){return false}
    let stack=[]
    
    let map={
        ")":"(",
        "}":"{",
        "]":"["
    }
    
    for(let char of s){
        if(map[char]){
            if(stack.length>0 & map[char]===stack[stack.length-1] ){
                stack.pop()
            }else{
                return false;
            }
            
        }else{
            stack.push(char)
        }
    }
    return stack.length===0;
}
}
