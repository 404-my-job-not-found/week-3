# Maximum Depth of Binary Tree

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

## 번역

이진 트리의 루트가 주어졌을 때, 그 최대 깊이를 반환합니다.

이진 트리의 최대 깊이는 루트 노드에서 가장 먼 리프 노드까지 가장 긴 경로를 따라 있는 노드의 수입니다.

## 예시

```
Example 1:

Input: root = [3,9,20,null,null,15,7]
Output: 3
```

```
Example 2:

Input: root = [1,null,2]
Output: 2
```

## 의식의 흐름
### step 1
- 노트 트리를 순회하면서 left/right의 값을 구하고 Math.max(left, right)를 통해 값을 더하는 식으로 진행하였습니다.

[Math.max 가 궁금하다면? Click!](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math/max)

- 쉽게 한줄로 요약하자면 max내의 args들중 더 높은값을 반환합니다. ```Math.max(1, 2)``` 가 있다고 가정하면 ```2``` 를 반환하겠죠?
- 이점을 이용해서 노드트리를 재귀적으로 순회하여 파고들고 파고들고 파고들어 깊이를 구하게됩니다.
- 직접 눈으로 보는게 더 편할꺼같아 콘솔로 해당 과정을 보여드리겠습니다.
```typescript
function maxDepth(root: TreeNode | null): number {
  if (root === null) return 0;

  const left = maxDepth(root.left);
  const right = maxDepth(root.right);

  return 1 + Math.max(left, right);
}
// arrayToTreeNode 는 배열을 트리노드로 변환시켜주는 함수입니다.
maxDepth(arrayToTreeNode([3, 9, 20, null, null, 15, 7]));
```

결과 : 
Left: 1,
Right: 2,

위와같은 결과값이 나오게됩니다.

이를 좀 더 자세히 들여다 보겠습니다. 재귀함수의 특성상 파고들다보면 가장먼저 찍히는 콘솔은 가장 마지막 노드의 위치가 될것입니다.
```javascript
// 재귀하는 트리노드
TreeNode {
  val: 3,
  left: TreeNode { val: 9, left: null, right: null },
  right: TreeNode {
    val: 20,
    left: TreeNode { val: 15, left: null, right: null },
    right: TreeNode { val: 7, left: null, right: null }
  }
}
```

1. 최상위 트리노드에서 재귀를 시작하면 가장먼저 ```const left``` 의 값을 구하기 위해 ```maxDepth(root.left)``` 를 재귀하게됩니다.
    ```javascript
      TreeNode { val: 9, left: null, right: null }
    ```
    그렇게 쭉 왼쪽으로 내려가다보면 위와 같은 노드를 만나게됩니다.

    그리고 해당 재귀스택에서 ```left``` 와 ```right``` 를 구하기위해 각각 ```root.left```, ```root.right``` 값을 넣어서 재귀하게됩니다.

    그러면 현재 ```root.left: null```, ```root.right: null``` 이기 때문에 둘다 0을 리턴하게됩니다.

    다시 돌아와서 ```TreeNode { val: 9, left: null, right: null }``` 에서 return 하게되는 값은 ```1 + Math.max(left, right)``` 이므로 이를 풀어보면
    ```1 + Math.max(0, 0)``` 이게 되어 최상이노드에서 타고 내려간 ```left``` 의 값은 ```1```이 되게됩니다.

2. ```const right``` 도 마찬가지로 ```maxDepth(root.right)``` 를 통해 재귀하게되고 이는 아래와 같은 루트를 타게됩니다.
    ```javascript
    // right의 첫번재 재귀
    right: TreeNode {
        val: 20,
        left: TreeNode { val: 15, left: null, right: null },
        right: TreeNode { val: 7, left: null, right: null }
      }

    // right > left 의 첫번재 재귀 
    TreeNode { val: 15, left: null, right: null }
    return 1 + Math.max(0, 0);

    // right > right의 첫번째 재귀
    TreeNode { val: 7, left: null, right: null }
    return 1 + Math.max(0, 0);

    // right의 return 
    TreeNode {
      val: 20,
      left: TreeNode { val: 15, left: null, right: null },
      right: TreeNode { val: 7, left: null, right: null }
    }
    // return 1 + Math.max(left, right);
    return 1 + Math.max(1, 1);
    ```
3. 재귀를 통해 얻은 결과값을 더해 최종 결과값을 도출하게 됩니다.
    ```javascript
    // 최종 노드트리가 갖게되는 값
    TreeNode {
      val: 3,
      left: TreeNode { val: 9, left: null, right: null },
      right: TreeNode {
        val: 20,
        left: TreeNode { val: 15, left: null, right: null },
        right: TreeNode { val: 7, left: null, right: null }
      }
    }
    const left = 1;
    const right = 2;

    return 1 + Math.max(left, right) // 1 + 2 = 3
    ```
