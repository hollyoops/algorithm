import { buildTree, depth } from './tree'

test('should return 1 when only have 1 node', () => {
  const tree = buildTree([1])

  expect(depth(tree)).toBe(1)
})

test('should correct level when get depth', () => {
  const tree = buildTree([1, 2, 3, 4, null, 6])

  expect(depth(tree)).toBe(3)
})
