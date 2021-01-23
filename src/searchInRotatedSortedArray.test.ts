/**
 * 
 * You are given an integer array nums sorted in ascending order (with distinct values), and an integer target.

    Suppose that nums is rotated at some pivot unknown to you beforehand (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

    If target is found in the array return its index, otherwise, return -1.

    Example 1:

    Input: nums = [4,5,6,7,0,1,2], target = 0
    Output: 4

    Example 2:

    Input: nums = [4,5,6,7,0,1,2], target = 3
    Output: -1

    Example 3:

    Input: nums = [1], target = 0
    Output: -1
 
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 */

function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number,
): number {
  if (start > end) return -1
  if (start === end) return target === nums[start] ? start : -1

  const lMid = Math.floor((start + end) / 2)
  if (nums[start] <= target && target <= nums[lMid]) {
    return binarySearch(nums, target, start, lMid)
  }

  const rMid = lMid + 1
  if (nums[rMid] <= target && target <= nums[end]) {
    return binarySearch(nums, target, rMid, end)
  }

  return -1
}

function doSearch(
  nums: number[],
  target: number,
  start: number,
  end: number,
): number {
  if (start > end) return -1
  if (start === end) return target === nums[start] ? start : -1

  if (nums[start] < nums[end]) {
    return binarySearch(nums, target, start, end)
  }

  if (nums[start] > nums[end]) {
    const mid = Math.floor((start + end) / 2)
    const leftValue = doSearch(nums, target, start, mid)
    if (leftValue != -1) return leftValue
    return doSearch(nums, target, mid + 1, end)
  }

  return -1
}

const search = (nums: number[], target: number) =>
  doSearch(nums, target, 0, nums.length - 1)

test('binarySearch', () => {
  const nums = [0, 1, 2, 4, 5, 6, 7]
  expect(binarySearch(nums, 3, 0, nums.length - 1)).toEqual(-1)
})

test('should return 4 when target is 0', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  expect(search(nums, 0)).toEqual(4)
})

test('should not found 3', () => {
  const nums = [4, 5, 6, 7, 0, 1, 2]
  expect(search(nums, 3)).toEqual(-1)
})

test('should not found 0', () => {
  const nums = [1]
  expect(search(nums, 0)).toEqual(-1)
})
