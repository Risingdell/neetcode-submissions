class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        let map=new Map();

        for(let i=0;i<s.length;i++){
            let ele=s[i];
            map.set(ele,(map.get(ele)||0)+1)
        }

        for(let i=0;i<t.length;i++){
            let num=t[i];
            if(map.has(num)){
                map.set(num,map.get(num)-1);
            }else{
                return false;
            }
        }
        for(let  [key,value] of map){
            if(value!==0){
                return false;
            }
        }
        return true
    }
}
