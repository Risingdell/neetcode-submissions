class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if(s.length==t.length){
            let map=new Map();
            for(let i=0;i<s.length;i++){
                map.set(s[i],(map.get(s[i])||0)+1)
            }
            for(let i=0;i<t.length;i++){
                if (map.has(t[i])) {
                    map.set(t[i], (map.get(t[i]) || 0) - 1);
                } else {
                    return false;
                }
            }
            for(let [key,val] of map){
                if(val>=1){
                    return false
                }
            }
            return true
            

            

        }
        return false
    }
}
