/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 */

import { buildTree, INode } from './tree'

const tree = buildTree([1, 2, 3, null, 5, null, 4])

function getRightSideViewBFS(root: INode<number | null>): number[] {
  let currentLevelEnd = -1
  const queue = [root]
  const result: number[] = []

  while (queue.length > 0) {
    if (currentLevelEnd === -1) {
      const last = queue[queue.length - 1]
      result.push(last?.value || -1)
      currentLevelEnd = queue.length - 1
    }

    const head = queue.shift()
    currentLevelEnd--

    if (head?.left) {
      queue.push(head.left)
    }

    if (head?.right) {
      queue.push(head.right)
    }
  }

  return result
}

test('should return right side when use BFS', () => {
  expect(getRightSideViewBFS(tree)).toEqual([1, 3, 4])
})
