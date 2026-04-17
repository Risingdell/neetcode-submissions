class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let enco="";
        

        for(let eles of strs){
            enco += eles.length+"#"+eles;

        }
        return enco;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        let res=[];
        while(i<str.length){

            let j=i
            while(str[j]!=="#"){
                j++;
            }
            let length=Number(str.slice(i,j));
            res.push(str.slice(j+1,j+1+length))


            i=j+1+length

        }
        return res;
    }
}
