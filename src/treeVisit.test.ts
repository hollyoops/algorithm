import { buildTree, INode } from './tree'
import {
  preorderVisit,
  preorderVisitNoRecursion,
  inorderVisit,
  inorderVisitNoRecursion,
  postorderVisit,
  postorderVisitNoRecursion,
  bfs,
  bfsRecursion,
} from './treeVisit'

let root: INode<number>
beforeAll(() => {
  root = buildTree([1, 2, 3, 4, 5, 6, 7])
})

test('should return the right order when visit tree with preorder', () => {
  expect(preorderVisit(root)).toEqual([1, 2, 4, 5, 3, 6, 7])
})

test('should return right order when visit tre with preorder without recursion', () => {
  expect(preorderVisitNoRecursion(root)).toEqual([1, 2, 4, 5, 3, 6, 7])
})
test('should return the right order when visit tree with inorder', () => {
  expect(inorderVisit(root)).toEqual([4, 2, 5, 1, 6, 3, 7])
})

test('should return right order when visit tre with inorder without recursion', () => {
  expect(inorderVisitNoRecursion(root)).toEqual([4, 2, 5, 1, 6, 3, 7])
})

test('should return the right order when visit tree with postorder', () => {
  expect(postorderVisit(root)).toEqual([4, 5, 2, 6, 7, 3, 1])
})

test('should return right order when visit tree with postorder without recursion', () => {
  expect(postorderVisitNoRecursion(root)).toEqual([4, 5, 2, 6, 7, 3, 1])
})

test('should return right order when visit tree with BFS', () => {
  expect(bfs(root)).toEqual([1, 2, 3, 4, 5, 6, 7])
})

test('should return right order when visit tree with BFS with recursion', () => {
  expect(bfsRecursion(root)).toEqual([1, 2, 3, 4, 5, 6, 7])
})
