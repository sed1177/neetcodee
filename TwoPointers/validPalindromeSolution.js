/*
Valid Palindrome
Easy
Topics
Company Tags
Hints
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Note: Alphanumeric characters consist of letters (A-Z, a-z) and numbers (0-9).

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true
Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.


*/


class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(string) {

        const turnToLowerCase = string
            .toLowerCase()
            .replace(/[^a-z0-9]/g, '')

        // reverse
        const reversed = turnToLowerCase
            .split('')
            .reverse()
            .join('')

        return turnToLowerCase === reversed
    }
}
