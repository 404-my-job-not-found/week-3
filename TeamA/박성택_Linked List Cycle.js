/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    // 주기가 있는지 boolean 값을 리턴하라
    // pos는 내부적으로 노드의 인덱스 값을 말한다. 파라미터로 주어지지 않는다
    // follow up : O(1) 

    // 파라미터로 주어지지 않는다면 어떻게 하라는거냐?
    // 노드 안에서 인덱스 값을 어떻게..? 어떻게 구분을 해야 하지? 

    // 만약 index 값을 카운트 할 수 있다면..?
    // curr.val로 set 한번 해보입시더;
    // -> curr.val 로 하면 중복값이 존재할 수 있다;
    // linked list는 값이 중복되지 않는가..?

    // let prev = null;
    // let curr = head;

    // const seens = new Set();

    // while(curr !== null) {
    //     if(seens.has(curr)) {
    //         return true; // 있으면 주기가 있는 것이야..?
    //     }
    //     seens.add(curr);      
    //     curr = curr.next;          
    // }
    
    // return false; // 끝까지 같다면 주기가 없는 것


    // Follow up에 "공간 O(1)로 풀어라"가 붙으면 이 방법을 써야 함.

    // 아이디어
    // 느린 포인터(slow): 한 칸씩 이동
    // 빠른 포인터(fast): 두 칸씩 이동

    // 만약 사이클이 있다면, 둘은 언젠가 만난다!
    // 사이클이 없다면 fast가 null에 도달한다.

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;         // 1칸 이동
        fast = fast.next.next;    // 2칸 이동

        if (slow === fast) {
            return true; // 만남 => 사이클 있음
        }
    }

    return false; // fast가 끝까지 감 => 사이클 없음

};