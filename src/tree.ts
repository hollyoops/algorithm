export interface INode<T> {
  value: T
  left?: INode<T>
  right?: INode<T>
}

function doBuild<T>(node: INode<T>, nodeIndex: number, values: T[]) {
  const len = values.length
  const leftIndex = 2 * nodeIndex + 1
  const rightIndex = leftIndex + 1
  if (leftIndex < len && values[leftIndex]) {
    node.left = { value: values[leftIndex] }
    doBuild(node.left, leftIndex, values)
  }

  if (rightIndex < len && values[rightIndex]) {
    node.right = { value: values[rightIndex] }
    doBuild(node.right, rightIndex, values)
  }
}

export function buildTree<T>(values: T[]): INode<T> {
  const root: INode<T> = {
    value: values[0],
  }
  doBuild(root, 0, values)
  return root
}

export function depth<T>(root?: INode<T>): number {
  if (!root) {
    return 0
  }

  return Math.max(depth(root.left), depth(root.right)) + 1
}
