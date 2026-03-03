/*

Encode and Decode Strings
Medium
Topics
Company Tags
Hints
Design an algorithm to encode a list of strings to a string. The encoded string is then sent over the network and is decoded back to the original list of strings.

Machine 1 (sender) has the function:

string encode(vector<string> strs) {
    // ... your code
    return encoded_string;
}
Machine 2 (receiver) has the function:

vector<string> decode(string s) {
    //... your code
    return strs;
}
So Machine 1 does:

string encoded_string = encode(strs);
and Machine 2 does:

vector<string> strs2 = decode(encoded_string);
strs2 in Machine 2 should be the same as strs in Machine 1.

Implement the encode and decode methods.

Example 1:

Input: dummy_input = ["Hello","World"]

Output: ["Hello","World"]

Explanation:
Machine 1:
Codec encoder = new Codec();
String msg = encoder.encode(strs);
Machine 1 ---msg---> Machine 2

Machine 2:
Codec decoder = new Codec();
String[] strs = decoder.decode(msg);
Example 2:

Input: dummy_input = [""]

Output: [""]

Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains any possible characters out of 256 valid ASCII characters.



*/

// studied solution from chatgpt. this solution is AI coded and i have asked gipity to add notes so i can understand this problem. 



class Codec {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    encode(strs) {
        let encoded = '';
        for (let s of strs) {
            // prepend length of string + '#' + the string itself
            encoded += s.length + '#' + s;
        }
        return encoded;
    }

    /**
     * @param {string} str
     * @return {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            // find the '#' separator to get the length of the string
            while (str[j] !== '#') j++;
            let length = parseInt(str.slice(i, j));
            // extract the string of given length
            res.push(str.slice(j + 1, j + 1 + length));
            // move pointer to start of next encoded string
            i = j + 1 + length;
        }
        return res;
    }
}