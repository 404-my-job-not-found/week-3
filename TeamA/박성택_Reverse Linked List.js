/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 빠르게 풀이 보겠습니다^^

    // 모든 노드의 방향을 반대로 바꾼다
    // prev는 null로 처리하고, curr은 현재 처리 중인 노드를 가리킵니다.
    // 1 > 2 > 3  > null

    // 1단계
    // 초기값
    // prev = null
    // curr = [1]
    
    // [1] -> null   [2] -> [3] -> null

    // 2단계
    // 초기값
    // prev = [1]
    // curr = [2]
    
    // [1] -> null [2] -> [1] -> null [3] -> null

    // 3단계
    // 초기값
    // prev = [2]
    // curr = [3]

    //[3] -> [2] -> [1] -> null

    
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next; // 다음 노드 임시 저장
        curr.next = prev;     // 방향 뒤집기
        prev = curr;          // prev 한 칸 앞으로
        curr = next;          // curr 한 칸 앞으로
    };
    
    return prev;
};