class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length){return false}
        let Rmap=new Map();
        let Tmap=new Map();
        for(let i=0;i<s.length;i++){
            Rmap.set(s[i],(Rmap.get(s[i])||0)+1);
        }

        for(let i=0;i<t.length;i++){
            Tmap.set(t[i],(Tmap.get(t[i])||0)+1);
        }
        for(let [key,value] of Rmap){
            if(!Tmap.has(key) || value!==Tmap.get(key)){
                return false;
            }

        }
        return true;
    }
}
