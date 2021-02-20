function swapValue(nums: number[], idx1: number, idx2: number) {
  const temp = nums[idx1]
  nums[idx1] = nums[idx2]
  nums[idx2] = temp
}

describe('max heap', () => {
  function findTarget(cur: number, tail: number, nums: number[]) {
    const tempLeft = 2 * cur + 1
    const tempRight = 2 * cur + 2
    const left = tempLeft <= tail ? tempLeft : cur
    const right = tempRight <= tail ? tempRight : left
    const maxChild = nums[left] < nums[right] ? right : left

    return nums[cur] < nums[maxChild] ? maxChild : cur
  }

  function adjustMaxHeap(nums: number[], tail: number, cur: number) {
    const target = findTarget(cur, tail, nums)
    if (target !== cur) {
      swapValue(nums, cur, target)
      adjustMaxHeap(nums, tail, target)
    }
  }

  function doSort(nums: number[], tail: number) {
    const lastNonLeap = Math.floor((tail - 1) / 2)
    for (let cur = lastNonLeap; cur >= 0; cur--) {
      adjustMaxHeap(nums, tail, cur)
    }

    swapValue(nums, 0, tail)
    if (tail > 0) {
      doSort(nums, tail - 1)
    }

    return nums
  }

  function maxHeapSort(nums: number[]) {
    return doSort(nums, nums.length - 1)
  }

  test('should return ascending order', () => {
    expect(maxHeapSort([4, 6, 8, 5, 9])).toEqual([4, 5, 6, 8, 9])
  })
})

describe('min heap', () => {
  function getMinIndex(nums: number[], i: number, j: number) {
    return nums[i] <= nums[j] ? i : j
  }

  function getSwapTarget(nums: number[], tail: number, curr: number) {
    const tempLeft = 2 * curr + 1
    const tempRight = 2 * curr + 2
    const left = tempLeft <= tail ? tempLeft : -1
    const right = tempRight <= tail ? tempRight : -1

    if (left === -1 && right === -1) {
      return curr
    }

    if (right === -1) {
      return getMinIndex(nums, curr, left)
    }

    if (right !== -1 && left !== -1) {
      return getMinIndex(nums, curr, getMinIndex(nums, left, right))
    }

    return curr
  }

  function adjustHeap(nums: number[], tail: number, curr: number) {
    let node = curr
    while (node >= 0 && node <= tail) {
      const target = getSwapTarget(nums, tail, node)

      if (target === node) {
        break
      } else {
        swapValue(nums, node, target)
        node = target
      }
    }
  }

  function minHeapSort(nums: number[]) {
    for (let tail = nums.length - 1; tail > 0; tail--) {
      for (let i = Math.floor((tail - 1) / 2); i >= 0; i--) {
        adjustHeap(nums, tail, i)
      }
      swapValue(nums, 0, tail)
    }

    return nums
  }

  test('should return descending order', () => {
    expect(minHeapSort([4, 6, 8, 5, 9])).toEqual([9, 8, 6, 5, 4])
  })
})
