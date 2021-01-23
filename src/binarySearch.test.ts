/**
 * Binary Search
 */

test('should return searched index', () => {
  const binarySearch = (nums: number[], target: number): number => {
    let left = 0
    let right = nums.length - 1

    while (left < right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
        return mid
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }

    return 0
  }
  expect(binarySearch([1, 3, 5, 7, 9], 5)).toBe(2)
})
