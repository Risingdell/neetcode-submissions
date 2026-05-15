class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length===0)return "";

        let countT=new Map();
        let window=new Map();
        for(let i=0;i<t.length;i++){
            countT.set(t[i],(countT.get(t[i])||0)+1)
        }
        let have=0;
        let left=0;
        let resLen=Infinity;
        let res=[-1,-1]
        let need=countT.size;
        let right=0;
        for( right=0;right<s.length;right++){
            let c=s[right];
            window.set(s[right],(window.get(s[right])||0)+1);
            if(countT.has(s[right]) && (countT.get(s[right])===window.get(s[right]))){
                have+=1;
            }
            while(have===need){
                if(right-left+1<resLen){
                    resLen=right-left+1;
                    res=[left,right]
                }
                window.set(s[left],(window.get(s[left])||0)-1)
                if(countT.has(s[left])&&(window.get(s[left])<countT.get(s[left]))){
                    have-=1
                }
                left+=1;
            }
            
        }
        return resLen === Infinity? "": s.slice(res[0], res[1] + 1);
    }
}
