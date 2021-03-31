/// https://leetcode.com/problems/maximum-product-subarray/

function maxProduct(nums: number[]): number {
  let maxValue = nums[0]
  let dpMaxI = nums[0]
  let dpMinI = nums[0]

  for (let i = 1; i < nums.length; i++) {
    const newMax = nums[i] * dpMaxI
    const newMin = nums[i] * dpMinI
    dpMaxI = Math.max(nums[i], newMax, newMin)
    dpMinI = Math.min(nums[i], newMax, newMin)

    maxValue = Math.max(dpMaxI, maxValue)
  }

  return maxValue
}

test('should return the max product value of sub array', () => {
  expect(maxProduct([2, 3, -2, 4])).toBe(6)
  expect(maxProduct([-2, 0, -1])).toBe(0)
})
