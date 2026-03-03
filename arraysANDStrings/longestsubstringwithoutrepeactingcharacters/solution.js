/*
Longest Substring Without Repeating Characters
Medium
Topics
Company Tags
Hints
Given a string s, find the length of the longest substring without duplicate characters.

A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = "zxyzxyz"

Output: 3
Explanation: The string "xyz" is the longest without duplicate characters.

Example 2:

Input: s = "xxxx"

Output: 1
Constraints:

0 <= s.length <= 1000
s may consist of printable ASCII characters.


*/


// video solution from youtube 
// learned about sets
// set methods

class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let left = 0, maxLength = 0;

        for (let right = 0; right < s.length; right++) {
            while (set.has(s[right])) {
                // remove the leftmost character until no duplicates
                set.delete(s[left]);
                left++;
            }
            set.add(s[right]); // add the current character
            maxLength = Math.max(maxLength, right - left + 1);
        }

        return maxLength;
    }
}
