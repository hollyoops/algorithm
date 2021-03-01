function merge(left: number[], right: number[]) {
  const sortedArray: number[] = []

  let lIdx = 0
  let rIdx = 0

  while (lIdx < left.length || rIdx < right.length) {
    if (lIdx >= left.length) {
      sortedArray.push(right[rIdx++])
    } else if (rIdx >= right.length) {
      sortedArray.push(left[lIdx++])
    } else {
      if (left[lIdx] <= right[rIdx]) {
        sortedArray.push(left[lIdx++])
      } else {
        sortedArray.push(right[rIdx++])
      }
    }
  }

  return sortedArray
}

function divAndSort(nums: number[], start: number, end: number): number[] {
  if (start === end) {
    return [nums[start]]
  }
  const mid = Math.floor((start + end) / 2)
  return merge(divAndSort(nums, start, mid), divAndSort(nums, mid + 1, end))
}

function mergeSort(nums: number[]) {
  return divAndSort(nums, 0, nums.length - 1)
}

test('should sort array with right order', () => {
  expect(merge([1, 4], [3, 8])).toEqual([1, 3, 4, 8])
  expect(mergeSort([1, 4, 3, 8, 5])).toEqual([1, 3, 4, 5, 8])
})
