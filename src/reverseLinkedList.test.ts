/**
 * 
 * Reverse a singly linked list.

    Example:

    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL
 */

interface INode {
  value: number
  next?: INode
}

class NodeList {
  private first?: INode
  private tail?: INode

  get head() {
    return this.first
  }

  addNode(value: number) {
    const newNode = {
      value,
    }

    if (!this.tail) {
      this.first = newNode
      this.tail = this.first
    } else {
      this.tail.next = newNode
      this.tail = newNode
    }

    return this
  }

  reverse() {
    let cur = this.first
    this.tail = this.first

    let pre: INode | undefined = undefined
    while (cur) {
      const next = cur.next
      cur.next = pre
      pre = cur
      cur = next
    }

    this.first = pre
  }

  listValues() {
    const list: number[] = []
    let cur = this.first
    while (cur) {
      list.push(cur.value)
      cur = cur.next
    }
    return list
  }
}

test('should reverse the link list', () => {
  const list = new NodeList()
  ;[1, 2, 3, 4, 5].forEach(element => {
    list.addNode(element)
  })

  list.reverse()

  expect(list.listValues()).toEqual([5, 4, 3, 2, 1])
})
