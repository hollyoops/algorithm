/** https://wiki.jikexueyuan.com/project/easy-learn-algorithm/fast-sort.html */

function swap(nums: number[], idxA: number, idxB: number) {
  const tmp = nums[idxA]
  nums[idxA] = nums[idxB]
  nums[idxB] = tmp
}

function sort(nums: number[], start: number, end: number): number {
  let left = start + 1
  let right = end
  const p = start

  let backward = true
  while (left <= right) {
    if (backward) {
      if (nums[right] <= nums[p]) {
        backward = false
      } else {
        right--
      }
    } else {
      if (nums[left] >= nums[p]) {
        swap(nums, left, right)
        backward = true
      } else {
        left++
      }
    }
  }

  if (nums[right] < nums[p]) {
    swap(nums, right, p)
  }

  return right
}

function doQuickSort(nums: number[], start: number, end: number) {
  if (start >= end) {
    return
  }

  const idx = sort(nums, start, end)
  doQuickSort(nums, start, idx - 1)
  doQuickSort(nums, idx + 1, end)
}

function quickSort(nums: number[]) {
  doQuickSort(nums, 0, nums.length - 1)
  return nums
}

test('Quick sort', () => {
  expect(quickSort([9, 7, 4, 2, 1])).toEqual([1, 2, 4, 7, 9])
})
