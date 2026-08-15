class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l=0
        let mf=0;
        let ml=0;
        let map=new Map();
        for(let r=0;r<s.length;r++){
            let ele=s[r];
            map.set(ele,(map.get(ele)||0)+1);
            mf=Math.max(mf,map.get(ele))

            while((r-l+1)-mf>k){
                let repele=s[l];
                map.set(repele,(map.get(repele))-1);
                l++
            }

            ml=Math.max(ml,(r-l+1))

        }
        return ml
    }
}
