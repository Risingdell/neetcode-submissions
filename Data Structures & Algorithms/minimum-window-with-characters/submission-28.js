class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let countT=new Map();
        let window=new Map();
        for(let i=0;i<t.length;i++){
            countT.set(t[i],(countT.get(t[i])||0)+1);
        }
        let have=0;
        let need=countT.size;
        let l=0;
        let r=0;
        let maxLen=Infinity;
        let arr=[-1,-1];
        for(r=0;r<s.length;r++){
            let ch=s[r]
            window.set(ch,(window.get(ch)||0)+1)
            if(countT.has(ch)&&(window.get(ch)===countT.get(ch))){
                have++;
                
            }
            while(have===need){
                if(r-l+1<maxLen){
                    maxLen=r-l+1;
                    arr=[l,r]
                }
                window.set(s[l],(window.get(s[l])||0)-1)
                if(countT.has(s[l])&&(window.get(s[l])<countT.get(s[l]))){
                    have--;
                }
                l+=1;

            }
        } 
        return maxLen===Infinity ?"": s.slice(arr[0],arr[1]+1);
    }
}
