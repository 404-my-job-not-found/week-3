/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // BFS - 너비 우선 탐색 사용해라
    // root 는 TreeNode 임을 생각해라
    // 초기값에 root는 TreeNode(3)

    const result = [];
    if (!root) return result;

    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;   // 현재 레벨에 있는 노드 수
        const level = [];                 // 현재 레벨 노드 값 저장

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();     // 큐에서 꺼냄
            level.push(node.val);           // 값 저장
            // console.log(node.val, i, levelSize);

            if (node.left) queue.push(node.left);   // 왼쪽 자식 추가
            if (node.right) queue.push(node.right); // 오른쪽 자식 추가
        }
        // console.log(level, queue);
        result.push(level);               // 현재 레벨 완료
    }

    return result;
};