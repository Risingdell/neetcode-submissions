class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let result=[];

        for(let i=0;i<s.length;i++){
            let key=s[i].toUpperCase();
            if((key>='A' && key<='Z')||(key>='0' && key<='9')){
                result.push(key);
            }
        }
        let i=0;
        let j=result.length-1;

        while(i<=j){
            if(result[i]!==result[j]){
                return false;
            }
            i++;j--;
        }
        return true;
    }
}
