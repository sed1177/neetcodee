/*


06. Reverse Linked List
Easy
Topics
premium lock icon
Companies
Given the head of a singly linked list, reverse the list, and return the reversed list.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:


Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000
 



*/


let reverseList = (head) => {
    let prev = null      // previous node starts as null
    let current = head  // current node starts at head
    // while on CURRENT node
    while (current) {
        let nextTemp = current.next // temporarily store next node
        current.next = prev      // reverse the link
        prev = current // move prev forward
        current = nextTemp // move current forward
    }
    
    return prev; // new head of reversed list
};