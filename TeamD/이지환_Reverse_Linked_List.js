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
var reverseList = function (head) {
    let prev = null;
    let current = head; // 처음엔 1을 가리킴
    let next = null;

    while (current !== null) {
        // 1단계: 다음 노드 미리 저장
        next = current.next;
        // 2단계: 현재 노드의 화살표 방향 바꾸기
        current.next = prev;
        // 3단계: prev와 current 한 칸씩 이동
        prev = current;
        current = next;

        console.log(prev);
    }

    return prev;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let List1 = new ListNode(1);
let List2 = new ListNode(2);
let List3 = new ListNode(3);
let List4 = new ListNode(4);
let List5 = new ListNode(5);

List1.next = List2;
List2.next = List3;
List3.next = List4;
List4.next = List5;

reverseList(List1);
