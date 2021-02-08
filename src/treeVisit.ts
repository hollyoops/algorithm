import { INode } from './tree'

export function preorderVisit<T>(root: INode<T>) {
  const values: T[] = []

  function doInorderVisit(node: INode<T>, result: T[]) {
    result.push(node.value)

    if (node.left) {
      doInorderVisit(node.left, result)
    }

    if (node.right) {
      doInorderVisit(node.right, result)
    }
  }

  doInorderVisit(root, values)

  return values
}

export function preorderVisitNoRecursion<T>(root: INode<T>): T[] {
  const results: T[] = []
  const stack: INode<T>[] = []
  let node: INode<T> | undefined = root

  while (node || stack.length > 0) {
    while (node) {
      stack.push(node)
      results.push(node.value)
      node = node.left
    }

    if (stack.length > 0) {
      const top = stack.pop()
      node = top?.right
    }
  }

  return results
}

export function inorderVisit<T>(root: INode<T>) {
  const values: T[] = []

  function doInorderVisit(node: INode<T>, result: T[]) {
    if (node.left) {
      doInorderVisit(node.left, result)
    }

    result.push(node.value)
    if (node.right) {
      doInorderVisit(node.right, result)
    }
  }

  doInorderVisit(root, values)

  return values
}

export function inorderVisitNoRecursion<T>(root: INode<T>): T[] {
  const results: T[] = []
  const stack: INode<T>[] = []

  let cur: INode<T> | undefined = root

  while (cur || stack.length > 0) {
    while (cur) {
      stack.push(cur)
      cur = cur.left
    }

    const node = stack.pop()
    if (node?.value) results.push(node?.value)
    cur = node?.right
  }

  return results
}

export function postorderVisit<T>(root: INode<T>) {
  const values: T[] = []

  function doVisit(node: INode<T>, result: T[]) {
    if (node.left) {
      doVisit(node.left, result)
    }

    if (node.right) {
      doVisit(node.right, result)
    }

    result.push(node.value)
  }

  doVisit(root, values)

  return values
}

export function postorderVisitNoRecursion<T>(node: INode<T>): T[] {
  let r: INode<T> | undefined = node
  let lastVisit: INode<T> | undefined = node

  const stack: INode<T>[] = []
  const values: T[] = []

  while (r || stack.length > 0) {
    while (r) {
      stack.push(r)
      r = r.left
    }

    if (stack.length > 0) {
      r = stack[stack.length - 1]

      if (!r.right || r.right === lastVisit) {
        values.push(r.value)
        stack.pop()
        lastVisit = r
        r = undefined
      } else {
        r = r.right
      }
    }
  }

  return values
}
