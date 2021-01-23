/**
 * Bubble sort
 */

const bubbleSort = (nums: number[]) => {
  const start = 0
  for (let end = nums.length - 1; end > 0; end--) {
    for (
      let firstCursor = start, secondCursor = start + 1;
      secondCursor <= end;
      firstCursor++, secondCursor++
    ) {
      if (nums[firstCursor] <= nums[secondCursor]) {
        continue
      }

      const tmp = nums[secondCursor]
      nums[secondCursor] = nums[firstCursor]
      nums[firstCursor] = tmp
    }
  }

  return nums
}

test('should sort array correct', () => {
  expect(bubbleSort([4, 1, 3, 0])).toEqual([0, 1, 3, 4])
})
