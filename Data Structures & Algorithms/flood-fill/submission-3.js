class Solution {
    /**
     * @param {number[][]} image
     * @param {number} sr
     * @param {number} sc
     * @param {number} color
     * @return {number[][]}
     */
    floodFill(image, sr, sc, color) {

        let cc=image[sr][sc];
        if(cc===color){
                return image
            }
        function Fill(image,ir,ic,color){
            

            if(ir<0 || ir>=image.length|| ic<0 || ic>=image[0].length){
                return
            }
            if(image[ir][ic]!==cc){
                return;
            }
            
            image[ir][ic]=color;
            Fill(image,ir+1,ic,color);
            Fill(image,ir-1,ic,color);
            Fill(image,ir,ic-1,color);
            Fill(image,ir,ic+1,color)

        }

        Fill(image,sr,sc,color);

        return image;
    }
}
