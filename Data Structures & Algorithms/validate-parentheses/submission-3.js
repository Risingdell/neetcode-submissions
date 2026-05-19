class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

        let map = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (let i = 0; i < s.length; i++) {
            let ch = s[i];

            // opening bracket
            if (ch === '(' || ch === '{' || ch === '[') {
                stack.push(ch);
            }
            // closing bracket
            else {
                if (stack.length === 0) {
                    return false;
                }

                let top = stack.pop();

                if (top !== map[ch]) {
                    return false;
                }
            }
        }

        return stack.length === 0;
    }
}