/// https://leetcode.com/problems/maximum-subarray/

function maxSubArray(nums: number[]): number {
  if (!nums.length) {
    return -1
  }

  let maxValue = -Number.MAX_VALUE
  let dpI = 0

  for (let i = 0; i < nums.length; i++) {
    dpI = Math.max(dpI + nums[i], nums[i])
    maxValue = Math.max(dpI, maxValue)
  }

  return maxValue
}

test('should return the max value of sub array', () => {
  expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6)
  expect(maxSubArray([1])).toBe(1)
  expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23)
})
